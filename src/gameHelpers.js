export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear']),
    );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            // First,check if we are on an actual cell or not
            if (player.tetromino[y][x] !== 0) {
                if (
                    // Second, check if move that we made is inside the game areas height (y)
                    // We shouldn't go to the bottom
                    !stage[y + player.pos.y + moveY] ||
                    // Thirdly, check that our move is inside the game areas width (x)
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // Finally, check if the cell we are moving to isn't set to "clear" or not
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
                    'clear'
                ) {
                    return true;
                }
            }
        }
    }
};