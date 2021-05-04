import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'

import initialState from './state'
import reducer from './reducer'

function initializeStore(preloadedState = initialState) {
  return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export const wrapper = createWrapper(initializeStore)
