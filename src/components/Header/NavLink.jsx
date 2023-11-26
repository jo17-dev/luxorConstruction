import './navlink.css';
const NavLink = (props) => {
    return (
        <li className="nav-item">
            <a href={props.href}> {props.text} </a>
        </li>
    )
}

export default NavLink;