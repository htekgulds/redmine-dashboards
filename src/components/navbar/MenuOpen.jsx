export default function Menu () {
  return (
    <ul className='menu menu-horizontal px-1'>
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className='p-2 bg-base-100 w-40 z-1'>
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  )
}
