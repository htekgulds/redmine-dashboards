import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getStats } from "../../services/redmine"
import useSWR from "swr"

export default function Stats () {
  const { data, error } = useSWR('/api/stats-summary', getStats)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="flex justify-center gap-4">
      <div className='stats shadow bg-base-200'>
        <div className='stat'>
          <div className='stat-figure'>
            <FontAwesomeIcon icon='fa-solid fa-bars-progress' size="2x" />
          </div>
          <div className='stat-value'>56%</div>
          <div className='stat-title w-32'>Overall progress</div>
          <div className='stat-desc'><span className="font-bold">↗︎ 8%</span> this week</div>
        </div>
        <div className='stat'>
          <div className='stat-figure'>
            <FontAwesomeIcon icon='fa-regular fa-folder-open' size="2x" />
          </div>
          <div className='stat-value'>{data.projectCount}</div>
          <div className='stat-title w-32'>Active projects</div>
          <div className='stat-desc'><span className="font-bold">{data.newProjectCount} new</span> this week</div>
        </div>
      {/* </div> */}
      {/* <div className="stats border border-base-100"> */}
        <div className='stat'>
          <div className='stat-figure'>
            <FontAwesomeIcon icon='fa-solid fa-list-check' size="2x" />
          </div>
          <div className='stat-value'>{data.openIssueCount}</div>
          <div className='stat-title w-32'>Open issues</div>
          <div className='stat-desc'><span className="font-bold">{data.closedIssueCount} closed</span> in total</div>
        </div>
      {/* </div>
      <div className="stats border border-base-100"> */}
        <div className='stat'>
          <div className='stat-figure'>
            <FontAwesomeIcon icon='fa-solid fa-person-running' size="2x" />
          </div>
          <div className='stat-value'>{data.userCount}</div>
          <div className='stat-title w-32'>Contributors</div>
          <div className='stat-desc'><span className="font-bold">2 new</span> this year</div>
        </div>
      {/* </div>
      <div className="stats border border-base-100"> */}
        <div className='stat'>
          <div className='stat-figure'>
            <FontAwesomeIcon icon='fa-regular fa-clock' size="2x" />
          </div>
          <div className='stat-value'>{data.loggedHoursTotal}</div>
          <div className='stat-title w-32'>Total logged hours</div>
          <div className='stat-desc'><span className="font-bold">{data.estimatedHoursTotal}</span> hours estimated (↗︎ 35%)</div>
        </div>
      </div>
    </div>
  )
}
