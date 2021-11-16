import {NavLink, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Base from "./pages/base/base";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import {useState} from "react";
import Param from "./pages/param/param";
import './default.css';

function App({history}) {
    const [path, setPath] = useState("");
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/base-route">基本路由</NavLink></li>
                    <li><NavLink to="/path-param">路径传参</NavLink></li>
                    <li>
                        <input type="text" onChange={(event) => {
                            setPath(event.target.value)
                        }} value={path}/>
                        <button onClick={() => {
                            setPath('');
                            history.push(path[0] === '/' ? path : `/${path}`);
                        }}>跳转
                        </button>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/base-route" component={Base}/>
                <Route path="/path-param" component={Param}/>
                <Route path="/404" component={NotFound}/>
                <Redirect to="/404"/>
            </Switch>
        </>
    )
}

export default withRouter(App);
