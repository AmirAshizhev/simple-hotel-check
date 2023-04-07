const defaultState = {
  favoriteshotels: []
}

export const favoriteReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_HOTEL": 
      return {
        ...state, 
        favoriteshotels: [ ...state.favoriteshotels, action.payload] 
      }
      case "REMOVE_HOTEL": 
      return {
        ...state, 
        favoriteshotels: state.favoriteshotels.filter(favoriteshotel => favoriteshotel.hotel.hotelId !== action.payload) 
      }
    default: 
      return state
  }
}