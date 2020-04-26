const { NavLink } = ReactRouterDOM


export function NavBar(props) {
    
    return <nav>
        <ul className={props.linksClass}>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/book'>Books</NavLink></li>
            <li><NavLink to='/book'>Nots</NavLink></li>
            <li><NavLink to='/email'>Email</NavLink></li>
            {/* <button onClick={() => {
            props.history.goBack();
        }}>➜</button> */}
        </ul>

    </nav>
}