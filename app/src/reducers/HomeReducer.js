import { ActionTypes } from "../../src/actions/ActionTypes"

let initialState = {
  pages: []
}

export const homeReducer = (state = initialState, action)=>{
  switch(action.type)
  {
      case ActionTypes.pages:
          return Object.assign({}, state, {pages: state.pages.concat(action.payload)})
  }
  return state
}
