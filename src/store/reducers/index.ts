import { combineReducers } from 'redux'
import { initialAppState, InitialAppState } from 'store/initial-state'
import { IAction } from 'types/types.d'
import * as actions from 'store/actions'

const appState = (state: InitialAppState = initialAppState, action: IAction): InitialAppState => {
  switch(action.type){
    case actions.UPDATE_USERNAME:
      return { ...state, name: action.payload.user }

    default: return state
  }
}

export const mainReducer = combineReducers({
  appState
})
