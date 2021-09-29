import { call, put, all, takeLatest, takeEvery } from "redux-saga/effects";
import {
  activeItemsFetchSucceedAction,
  activeItemsFetchFailedAction,
  activeItemsFetchActionType,
  activeItemCreateActionType,
  activeItemsChangedAction,
  activeItemsChangedActionType,
  activeItemDeleteActionType,
  activeItemMarkAsCompleteActionType
} from "./activeItemsSlice";
import {
  completedItemsFetchSucceedAction,
  completedItemsFetchFailedAction,
  completedItemsFetchActionType,
} from "./completedItemsSlice";
import axios from "axios";

function* fetchActiveItemsSaga(action) {
  const result = yield call(async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/shopping-item");
      return data;
    } catch (e) {
      return null;
    }
  });
  if (result) {
    yield put(activeItemsFetchSucceedAction(result));
  } else {
    yield put(activeItemsFetchFailedAction());
  }
}

function* fetchCompletedItemsSaga(action) {
  const result = yield call(async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/shopping-item", {
        params: { completed: true },
      });
      return data;
    } catch (e) {
      return null;
    }
  });
  if (result) {
    yield put(completedItemsFetchSucceedAction(result));
  } else {
    yield put(completedItemsFetchFailedAction());
  }
}

function* createActiveItemSaga({ payload }) {
  const result = yield call(async () => {
    const { data } = await axios.post(
      "http://localhost:8080/shopping-item",
      payload
    );
    return data;
  });
  if (result) {
    yield put(activeItemsChangedAction());
  }
}

function* deleteActiveItemSaga({ payload }) {
  const response = yield call(async () => {
    const response = await axios.delete(
      `http://localhost:8080/shopping-item/${payload}`
    );
    debugger;
    return response;
  });
  if (response) {
    yield put(activeItemsChangedAction());
  }
}

function* markCompleteItemSaga({ payload }) {
  const response = yield call(async () => {
    const response = await axios.patch(
      `http://localhost:8080/shopping-item/${payload}/purchased`
    );
    return response;
  });
  if (response) {
    yield put(activeItemsChangedAction());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(activeItemsFetchActionType, fetchActiveItemsSaga),
    takeLatest(completedItemsFetchActionType, fetchCompletedItemsSaga),
    takeEvery(activeItemCreateActionType, createActiveItemSaga),
    takeEvery(activeItemDeleteActionType, deleteActiveItemSaga),
    takeEvery(activeItemMarkAsCompleteActionType, markCompleteItemSaga),
    takeEvery(activeItemsChangedActionType, fetchActiveItemsSaga),
  ]);
}
