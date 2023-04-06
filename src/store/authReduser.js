const defaultState = {
  loggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token')
}

export const authReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN": 
      return {
        ...state, 
        loggedIn: true, 
        token: action.payload.email
      }
    case "LOGOUT": 
      localStorage.removeItem('token')
      return {
        ...state, 
        loggedIn: false,
        token: null
      }
    default: 
      return state
  }
}
