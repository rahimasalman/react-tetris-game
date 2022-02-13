export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // firstly, u need to check if you're on an actual cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // second, Make sure that game are height (y) is protected
          // And do not go to the bottom
          !stage[y + player.pos.y + moveY] ||
          // third, game are width (x) should be protected
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // finally, make sure that the cell we re moving is not set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
