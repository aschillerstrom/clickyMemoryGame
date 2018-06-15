import React from "react";
import "./title.css";

const Title = props => (
<div className = "header">
    <h1>Oodles of Poodles</h1>
    <h3>Test your memory - click on each poodle only once!</h3>
    <h3 className="scores">Score: {props.score} Highscore: {props.highscore}</h3>
</div>
);

export default Title;



