export const DIGIT_CLICK_ACTION = 'DIGIT_CLICK_ACTION';
export const CLIKED_DIGIT_KEY = 'DIGIT_CLICK_ACTION';

export const digitClick = digit => ({
  type: DIGIT_CLICK_ACTION,
  payload: {[CLIKED_DIGIT_KEY]: digit}

});
