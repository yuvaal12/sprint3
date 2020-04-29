const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM
const history = History.createBrowserHistory()

import { NavBar } from './cmps/NavBar.jsx';
import MainBar from './cmps/MainBar.jsx';
import BookApp from './pages/books/BookApp.jsx';
import KeepApp from './pages/keeps/KeepApp.jsx';
import BookDetails from './pages/books/BookDetails.jsx';
import EmailDetails from './pages/email/EmailDetails.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Home from './pages/Home.jsx';
import EmailApp from './pages/email/EmailApp.jsx';
import UserMsg from './cmps/UserMsg.jsx';

export class App extends React.Component {

    state = {
        isShown: null
    }
    toggleMenu = () => {

        var isShow = this.state.classNavBar
        if (isShow === 'hidden') {
            this.setState({ classNavBar: "nav-container", menuSimble: 'Ⅹ' })
        }
        else this.setState({ classNavBar: "hidden", menuSimble: '☰' })
    }
// =======
//         if (!this.state.isShown) {
//             this.setState({ isShown: true })
//         } else {
//             this.setState({ isShown: null })
//         }
// >>>>>>> 139a2b46ecb5d41ad2918cb02bcdf1157a32b6f1
//     }

    render() {
        return (
            <Router>
                <div>
                    {/* <nav>
                        <div className="navBar">
                            <a href="/index.html#/">
                                <img className="logo-img" src="assets/img/logo.png" alt="" />
                            </a>
                            <a className="open-menu" onClick={this.toggleMenu}>
                                <img className="menu-open" src="assets/icons/menu.png" alt="" />
                                <img className="menu-close" src="assets/icons/close.png" alt="" />
                            </a>
                        </div>
                    </nav> */}
                    <NavBar history={history} linksClass={this.state.classNavBar}></NavBar>
                    <MainBar onToggle={this.toggleMenu} />
                    {this.state.isShown && <NavBar history={history}></NavBar>}
                    <main className="main container">
                        <Switch>
                            <Route component={AboutUs} path="/about" />
                            <Route component={BookApp} exact path="/book" />
                            <Route component={BookDetails} path="/book/:theBookId" />
                            <Route component={EmailDetails} path="/email/:theEmailId" />
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


