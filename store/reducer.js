const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'state/save':
      console.log({ state, action })
      return { ...state, stars: action.payload }
    default:
      return state
  }
}

export async function fetchAPI(dispatch, getState) {
  const res = await fetch('https://api.github.com/repos/developit/preact')
  return await res.json()
}

export default reducer
