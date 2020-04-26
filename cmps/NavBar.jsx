const { NavLink } = ReactRouterDOM


export function NavBar(props) {
    return <nav>
        <ul>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/book'>Our Books</NavLink></li>
        </ul>
        <button onClick={() => {
            props.history.goBack();
        }}>Back</button>
    </nav>
}