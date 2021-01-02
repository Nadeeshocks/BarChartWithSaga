const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state };
    case 'NEWS_RECEIVED':
      return { ...state, news: action };
    default:
      return state;
  }
};

export default reducer;
