import React from "react";
import "./title.css";

const Title = props => (
<div className = "header">
    <h1 className="title">{props.children}</h1>
    <div className="scores">Score: {props.score} Highscore: {props.highscore}</div>
</div>
);

export default Title;



