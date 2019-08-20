export const UPDATE_SPLASH_CONTENT = 'UPDATE_SPLASH_CONTENT';

export const updateSplash = (payload) => {
  return {
    type: UPDATE_SPLASH_CONTENT,
    payload,
  }
};