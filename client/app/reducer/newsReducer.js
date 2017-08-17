module.exports = (state = {
  news: []
}, action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      state = Object.assign({}, state, {
        news: [...action.payload]
      })
      return state
      
    default:
      return state
  }
}