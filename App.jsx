const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink  } = ReactRouterDOM
const history = History.createBrowserHistory()

import {NavBar} from './cmps/NavBar.jsx';
import BookApp from './pages/books/BookApp.jsx'
import BookDetails from './pages/books/BookDetails.jsx'
import AboutUs from './pages/AboutUs.jsx';
import Home from './pages/Home.jsx';
import UserMsg from './cmps/UserMsg.jsx';

export class App extends React.Component {

    state = {
        classNavBar : "hidden"
    }
    toggleMenu = () => {
        console.log("ffffff");
        
    }

    render() {
        return (
            <Router>
                <div>
                    <header>
                         <div className="navBar">
                         <h2 className="title-page">App<span>sus</span>
                          <img className="logo-img" src="assets/img/logo.png" alt=""></img>
                          </h2>
                          <a className="open-menu" onclick={this.toggleMenu()} href="">❐</a>
                          </div>
                    </header>    
                          <NavBar className={this.state.classNavBar} history={history}></NavBar>
                    <main className="main container">
                        <Switch>
                            <Route component={AboutUs} path="/about" />
                            <Route component={BookApp} exact path="/book" />
                            <Route component={BookDetails} path="/book/:theBookId" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                    <UserMsg/>
                </div>
            </Router>
        )
    }
}


