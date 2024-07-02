const initialUserState = {
  user: null,
}

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        user: action.payload,
        ...state,
      }
    case "REMOVE_USER":
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export { userReducer,initialUserState }
