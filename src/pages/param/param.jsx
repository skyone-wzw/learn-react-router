import {useState} from "react";
import {Route, withRouter} from "react-router-dom";
import ShowParam from "./showParam";

function Param({match, history}) {
    const [param, setParam] = useState("/path-param/");
    return (
        <>
            <h1>路径传参</h1>
            <input type="text" value={param} onChange={event => {
                const v = event.target.value;
                if (v.search(/^\/path-param\//) === 0) {
                    setParam(v);
                } else {
                    setParam("/path-param/")
                }
            }}/>
            <button onClick={() => {
                history.push(param)
            }}>设置路径
            </button>
            <Route path={`${match.path}/:p`} component={ShowParam}/>
        </>
    );
}

export default withRouter(Param);
