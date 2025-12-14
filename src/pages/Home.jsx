import { Outlet } from 'react-router'
import Stats from '../components/stats/Stats'
import Tabs from '../components/tabs/Tabs'

export default function Home () {
  return (
    <div>
      <div className="mb-8"><Stats /></div>
      <Tabs />
      <Outlet/>
    </div>
  )
}
