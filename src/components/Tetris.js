import React, { useState } from "react";
// styled-components
import {StyledTetrisWrapper, StyledTetris} from "./styles/StyledTetris";

//custom hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

// components
import Stage from "./Stage";
import Display from "./Display";
import StartButton  from "./StartButton";



const Tetris =() => {
//for speed level
const [dropTime, setDropTime] = useState(null);
const [gameOver, setGameOver] = useState(false);

const [player] = usePlayer();
const [stage, setStage] = useStage(player)
    // console.log(createStage())
    console.log('re-render');
    return (
        <StyledTetrisWrapper>
        <StyledTetris>
            <Stage stage={stage}/>
               <aside>
                   {gameOver ?
                       (<Display gameOver={gameOver} text="GAME OVER" />)
                   : (
                   <div>
                <Display text="Score"/>
                <Display text="Rows"/>
                <Display text="Level"/>
                   </div>
                       )};
                <StartButton/>
              </aside>
        </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;