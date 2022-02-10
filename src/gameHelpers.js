export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 18;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    );