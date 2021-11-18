import {Prompt} from "react-router-dom";
import {useState} from "react";

function InputPrompt() {
    const [input, setInput] = useState();
    return (
        <>
            <h1>离开提示</h1>
            <p>当用户离开页面时提示是否确认关闭。</p>
            <input type="text" value={input} onChange={event => {setInput(event.target.value)}}/>
            <Prompt when={!!input} message="你的输入不会保存，是否确认退出？"/>
        </>
    )
}

export default InputPrompt;
