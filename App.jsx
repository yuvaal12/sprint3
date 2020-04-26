const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink  } = ReactRouterDOM
const history = History.createBrowserHistory()

import {NavBar} from './cmps/NavBar.jsx';
import BookApp from './pages/books/BookApp.jsx'
import BookDetails from './pages/books/BookDetails.jsx'
import AboutUs from './pages/AboutUs.jsx';
import Home from './pages/Home.jsx';

export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <h2 className="title-page">Miss <span>BooK</span></h2>
                    <NavBar history={history}></NavBar>
                    <main className="main container">
                        <Switch>
                            <Route component={AboutUs} path="/about" />
                            <Route component={BookApp} exact path="/book" />
                            <Route component={BookDetails} path="/book/:theBookId" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}


