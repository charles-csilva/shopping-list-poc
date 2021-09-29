import activeItemsReducer from './activeItemsSlice';
import completedItemsReducer from './completedItemsSlice';

export default function rootReducer(state = {}, action) {
  return {
    activeItems: activeItemsReducer(state.activeItems, action),
    completedItems: completedItemsReducer(state.completedItems, action)
  }
}