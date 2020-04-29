const { NavLink } = ReactRouterDOM


export function NavBar(props) {
    
    return <nav>
        <ul className="nav-bar-links flex">
            <NavLink exact to='/' onClick={props.onToggle}><li>Home</li></NavLink>
            <NavLink to='/about' onClick={props.onToggle}><li>About</li></NavLink>
            <NavLink to='/book' onClick={props.onToggle}><li>Books</li></NavLink>
            <NavLink to='/notes' onClick={props.onToggle}><li>Notes</li></NavLink>
            <NavLink to='/email' onClick={props.onToggle}><li>Email</li></NavLink>
            {/* <button onClick={() => {
            props.history.goBack();
        }}>➜</button> */}
        </ul>

    </nav>
}