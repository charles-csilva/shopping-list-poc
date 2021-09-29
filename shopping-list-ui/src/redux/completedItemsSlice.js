const initialState = {
	data: ['b', 'd'],
	isLoading: false,
};

export const completedItemsFetchActionType = 'completedItems/fetch';
export const completedItemsFetchAction = () => ({
	type: completedItemsFetchActionType,
});
export const completedItemsFetchSucceedActionType =
	'completedItems/fetchSucceed';
export const completedItemsFetchSucceedAction = payload => ({
	type: completedItemsFetchSucceedActionType,
	payload,
});
export const completedItemsFetchFailedActionType = 'completedItems/fetchFailed';
export const completedItemsFetchFailedAction = () => ({
	type: completedItemsFetchFailedActionType,
});

export default function completedItemsReducer(state = initialState, action) {
	switch (action.type) {
		case completedItemsFetchSucceedActionType:
			return { ...state, isLoading: false, data: action.payload };
		case completedItemsFetchFailedActionType:
			return { ...state, isLoading: false, data: [] };
		default:
			return state;
	}
}
