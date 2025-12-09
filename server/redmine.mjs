import fs from 'fs'
import { H3 } from 'h3'
import path from 'path'

const readFileAsJson = (filePath) => {
  return JSON.parse(fs.readFileSync(path.resolve('server', 'data', filePath), 'utf8'))
}

const dailyProjectStats = readFileAsJson('dashboard_daily_project_stats_updated.json')
const dailyUserStats = readFileAsJson('dashboard_daily_user_stats.json')
const issueStatusHistory = readFileAsJson('dashboard_issue_status_history.json')
const projects = readFileAsJson('projects.json')
const issues = readFileAsJson('issues.json')
const users = readFileAsJson('users.json')

const app = new H3()

app.get('/daily-project-stats', async (event) => {
  return dailyProjectStats
})

app.get('/daily-user-stats', async (event) => {
  return dailyUserStats
})

app.get('/issue-status-history', async (event) => {
  return issueStatusHistory
})

app.get('/projects', async (event) => {
  return projects
})

app.get('/issues', async (event) => {
  return issues
})

app.get('/users', async (event) => {
  return users
})

export default app
