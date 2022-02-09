import React from "react";
import {StyledDisplay} from "./styles/StyledDisplay";

//props in this case there are 2 props, one is the name of the gameOver and the other is the text
const Display = ({gameOver, text}) => (
    <StyledDisplay gameOver={{gameOver}}>{text}</StyledDisplay>
);

export default Display;