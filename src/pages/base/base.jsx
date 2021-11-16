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
                <Route path={`${match.path}`} exact render={() => (
                    <>
                        <p>
                            我理解的，基本路由，就是<code>&lt;Switch/></code>、
                            <code>&lt;Route/></code>标签混合使用，<code>&lt;Link/></code>
                            用来跳转，当然，这些元素都要使用<code>&lt;Router/></code>标签包含。
                        </p>
                        <p>
                            活用<code>&lt;Switch/></code>和<code>&lt;Redirect/></code>
                            可以实现404页面，这部分代码在<code>App.jsx</code>里。
                        </p>
                    </>
                )}/>
                <Route path={`${match.path}/user`} component={User}/>
                <Route path={`${match.path}/detail`} component={Detail}/>
            </Switch>
        </>
    )
}

export default Base;
