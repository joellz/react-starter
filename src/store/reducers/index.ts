import { combineReducers } from 'redux'
import { initialState } from 'store/initial-state'
import * as actions from 'store/actions'

const appState = (state = initialState, action) => {
  switch(action.id){
    case actions.INITIAL_ACTION:
      return state

    default: return state
  }
}

export const mainReducer = combineReducers({
  appState
})
