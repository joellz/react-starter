import { combineReducers } from 'redux'
import { initialState } from '../initial-state'
import * as actions from '../actions'

const appState = (state = initialState, action) => {
  switch(action.id){
    case actions.INTITIAL_ACTION:
      return state

    default: return state
  }
}

export const mainReducer = combineReducers({
  appState
})
