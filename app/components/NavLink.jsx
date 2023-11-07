import Link from 'next/link'

const NavLink = ({ href, title, target }) => {
  return (
    <Link href = { href } target = { target } className = "block py-2 pl-3 pr-4 text-gray-700 sm:text-xl md:p-0 hover:text-black">{title}</Link>
  ) 
}

export default NavLink;
