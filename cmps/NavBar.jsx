const { NavLink } = ReactRouterDOM


export function NavBar(props) {
    
    return <nav>
        <ul className={props.linksClass}>
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/book'>Books</NavLink></li>
<<<<<<< HEAD
            <li><NavLink to='/notes'>Notes</NavLink></li>
            <li><NavLink to='/book'>Email</NavLink></li>
=======
            <li><NavLink to='/book'>Nots</NavLink></li>
            <li><NavLink to='/email'>Email</NavLink></li>
>>>>>>> e67b2971f485cd596e1d6ab5fcb025716e597d10
            {/* <button onClick={() => {
            props.history.goBack();
        }}>➜</button> */}
        </ul>

    </nav>
}