import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  const json = yield fetch(
    'https://my-json-server.typicode.com/Nadeeshocks/fake_posts/db'
  ).then((response) => response.json());

  yield put({
    type: 'NEWS_RECEIVED',
    json: json.posts || [{ error: json.message }],
  });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
