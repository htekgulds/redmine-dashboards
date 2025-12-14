import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router";

export default function Tabs () {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-center items-center">
      <div role="tablist" className="tabs tabs-box">
        <Link to="/projects" role="tab" className={pathname === "/projects" ? "tab tab-active" : "tab"}>
          <FontAwesomeIcon icon="fa-regular fa-folder-open" className="mr-4" /> Projects
        </Link>
        <Link to="/contributors" role="tab" className={pathname === "/contributors" ? "tab tab-active" : "tab"}>
          <FontAwesomeIcon icon="fa-solid fa-person-running" className="mr-4" /> Contributors
        </Link>
        <Link to="/issues" role="tab" className={pathname === "/issues" ? "tab tab-active" : "tab"}>
          <FontAwesomeIcon icon="fa-solid fa-list-check" className="mr-4" /> Issues
        </Link>
        <Link to="/time" role="tab" className={pathname === "/time" ? "tab tab-active" : "tab"}>
          <FontAwesomeIcon icon="fa-regular fa-clock" /> Time
        </Link>
      </div>
        <label className="input ml-12">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="mr-2" />
          <input type="search" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">F</kbd>
        </label>
    </div>
  )
}
