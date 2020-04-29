const { NavLink } = ReactRouterDOM


export function NavBar(props) {

    return <nav>
        <ul className="nav-bar-links flex">
            <NavLink exact to='/'><li>Home</li></NavLink>
            <NavLink to='/about' ><li>About</li></NavLink>
            <NavLink to='/book' ><li>Books</li></NavLink>
            <NavLink to='/notes' ><li>Notes</li></NavLink>
            <NavLink to='/email'><li>Email</li></NavLink>
            <button className="btn-back" onClick={() => {
                props.history.goBack();
            }}>➜</button>
        </ul>

    </nav>
}