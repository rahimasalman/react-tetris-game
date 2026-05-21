import React, { useState, useRef } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import {useInterval} from "../hooks/useInterval";
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import {useGameStatus} from "../hooks/useGameStatus";

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const touchStart = useRef(null);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    // console.log('re-render');

    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    };

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    };

    const drop = () => {
        //Increase level when player has cleared 10 rows
        if ( rows > (level + 1) * 10 ) {
            setLevel(prev => prev + 1);
        // Also we need to increase speed
            setDropTime(1000 / (level + 1) + 200);
        }

        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            // Game Over
            if (player.pos.y < 1) {
                // console.log("GAME OVER!!!");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    };

    const keyUp = ({keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    };

    const dropPlayer = () => {
        setDropTime(null);
        drop();
    };

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                dropPlayer();
            } else if (keyCode === 38) {
                playerRotate(stage, 1);
            }
        }
    };

    const handleTouchStart = (e) => {
        if (e.target.tagName === 'BUTTON') return;
        const touch = e.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e) => {
        if (!touchStart.current || gameOver) return;
        if (e.target.tagName === 'BUTTON') return;
        const touch = e.changedTouches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        if (absDx < 10 && absDy < 10) {
            playerRotate(stage, 1);
        } else if (absDx > absDy && absDx > 20) {
            movePlayer(dx > 0 ? 1 : -1);
        } else if (dy > 20) {
            dropPlayer();
        }
        touchStart.current = null;
    };

    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <StyledTetrisWrapper
            role="button"
            tabIndex="0"
            onKeyDown={e => move(e)}
            onKeyUp={keyUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text={`Game over ///////////                 Score: ${score}`} />
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;