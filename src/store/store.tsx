import { configureStore } from '@reduxjs/toolkit'
import sliceSnikers from './slices/sliceSnikers'

export const store = configureStore({
	reducer: {
		snikers: sliceSnikers,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
