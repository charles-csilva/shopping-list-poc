const initialState = {
  data: [],
  isLoading: false,
};

export const activeItemsFetchActionType = "activeItems/fetch";
export const activeItemsFetchAction = () => ({
  type: activeItemsFetchActionType,
});
export const activeItemsFetchSucceedActionType = "activeItems/fetchSucceed";
export const activeItemsFetchSucceedAction = (payload) => ({
  type: activeItemsFetchSucceedActionType,
  payload,
});
export const activeItemsFetchFailedActionType = "activeItems/fetchFailed";
export const activeItemsFetchFailedAction = () => ({
  type: activeItemsFetchFailedActionType,
});

export const activeItemCreateActionType = 'activeItems/create';
export const activeItemCreateAction = (payload) => ({ type: activeItemCreateActionType, payload });

export const activeItemDeleteActionType = 'activeItems/delete';
export const activeItemDeleteAction = (payload) => ({ type: activeItemDeleteActionType, payload });

export const activeItemMarkAsCompleteActionType = 'activeItems/markComplete';
export const activeItemMarkAsCompleteAction = (payload) => ({ type: activeItemMarkAsCompleteActionType, payload });

export const activeItemsChangedActionType = 'activeItems/changed';
export const activeItemsChangedAction = () => ({ type: activeItemsChangedActionType });

export default function activeItemsReducer(state = initialState, action) {
  switch (action.type) {
    case activeItemsFetchSucceedActionType:
      return { ...state, isLoading: false, data: action.payload };
    case activeItemsFetchFailedActionType:
      return { ...state, isLoading: false, data: [] };
    default:
      return state;
  }
}
