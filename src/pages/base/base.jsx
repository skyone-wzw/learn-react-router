import {Switch, Route, Link} from "react-router-dom";
import User from "./user";
import Detail from "./detail";

function Base({ match }) {
    return (
        <>
            <h1>基本路由</h1>
            <nav>
                <ul>
                    <li><Link to={`${match.path}`}>主页</Link></li>
                    <li><Link to={`${match.path}/user`}>用户页</Link></li>
                    <li><Link to={`${match.path}/detail`}>详情页</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path={`${match.path}/user`} component={User}/>
                <Route path={`${match.path}/detail`} component={Detail}/>
            </Switch>
        </>
    )
}

export default Base;
