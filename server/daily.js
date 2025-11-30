import { query } from "./db.js";
import { getProjects, getIssues, getTimeEntries, getUsers } from "./redmine.js";

const today = new Date().toISOString().split("T")[0];

async function aggregateProject(project) {
  const projectId = project.id;

  // 1. issues for project
  const issues = await getIssues({ project_id: projectId, limit: 10000 });

  const open = issues.filter(i => i.status.is_closed === false).length;
  const closed = issues.filter(i => i.status.is_closed === true).length;

  const newToday = issues.filter(i => i.created_on.startsWith(today)).length;

  const overdue = issues.filter(i =>
    i.due_date && i.due_date < today && i.status.is_closed === false
  ).length;

  const resolutionTimes = issues
    .filter(i => i.closed_on)
    .map(i =>
      (new Date(i.closed_on) - new Date(i.created_on)) / 3600000
    );

  const avgRes = resolutionTimes.length
    ? resolutionTimes.reduce((a, b) => a + b, 0) / resolutionTimes.length
    : 0;

  const timeEntries = await getTimeEntries({
    project_id: projectId,
    from: today,
    to: today,
    limit: 10000
  });

  const loggedHours = timeEntries.reduce((sum, t) => sum + t.hours, 0);

  await query(`
    INSERT INTO dashboard_daily_project_stats
      (project_id, date, open_issues, closed_issues, new_issues, avg_resolution_hours, overdue_issues, logged_hours_total)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    ON CONFLICT (project_id, date)
    DO UPDATE SET
      open_issues=$3,
      closed_issues=$4,
      new_issues=$5,
      avg_resolution_hours=$6,
      overdue_issues=$7,
      logged_hours_total=$8;
  `, [
    projectId, today, open, closed, newToday, avgRes, overdue, loggedHours
  ]);
}

export async function runDailyAggregation() {
  const projects = await getProjects();
  for (const p of projects) await aggregateProject(p);

  console.log("Daily aggregation completed:", today);
}

runDailyAggregation();
