const defaultState = {
  locationName: "Москва", 
  date: new Date().toISOString().slice(0, 10), 
  days: 1,
  data: []
}

export const searchReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT_VALUE": 
      return {
        ...state, 
        [action.payload.name]: action.payload.value
      }
    case "SET_DATA": 

      return {
        ...state, 
        data: action.payload
      }
    default: 
      return state
  }
}