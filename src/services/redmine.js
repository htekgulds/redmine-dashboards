import axios from 'axios'

export async function getStats () {
  const { data } = await axios.get('/api/redmine/stats-summary')
  return data
}
