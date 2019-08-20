import { UPDATE_SPLASH_CONTENT } from './splash.action';

const initialState = {
  splashTitle: 'React Boilerplate',
  splashSubtitle: 'A simple React starter to accelerate you application development.',
};

const splashReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SPLASH_CONTENT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default splashReducer;
