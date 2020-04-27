const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM
const history = History.createBrowserHistory()

import { NavBar } from './cmps/NavBar.jsx';
import BookApp from './pages/books/BookApp.jsx';
import KeepApp from './pages/keeps/KeepApp.jsx';
import BookDetails from './pages/books/BookDetails.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Home from './pages/Home.jsx';
import EmailApp from './pages/email/EmailApp.jsx';
import UserMsg from './cmps/UserMsg.jsx';

export class App extends React.Component {

    state = {
        classNavBar: "hidden",
        menuSimble: '☰'
    }
    toggleMenu = () => {
        var isShow = this.state.classNavBar
        if (isShow === 'hidden'){
            this.setState({ classNavBar: "nav-container" ,menuSimble:'Ⅹ'})
        } 
        else this.setState({ classNavBar: "hidden" ,menuSimble:'☰'})
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <div className="navBar">
                            <a href="/index.html#/">
                                <h2 className="title-page">App<span>sus</span>
                                    <img className="logo-img" src="assets/img/logo.png" alt=""></img>
                                </h2>
                            </a>
                            <a className="open-menu" onClick={this.toggleMenu}>{this.state.menuSimble}</a>
                        </div>
                    </nav>
                    <NavBar history={history} linksClass={this.state.classNavBar}></NavBar>
                    <main className="main container">
                        <Switch>
                            <Route component={AboutUs} path="/about" />
                            <Route component={BookApp} exact path="/book" />
                            <Route component={BookDetails} path="/book/:theBookId" />
                            <Route component={KeepApp} path="/notes" />
                            <Route component={EmailApp} path="/email" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                    <UserMsg />
                </div>
            </Router>
        )
    }
}


