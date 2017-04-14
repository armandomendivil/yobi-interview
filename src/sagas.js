import { fork, take, call } from 'redux-saga/effects';

// This is an example function of how we use our sagas to
// make HTTP requests and handle actions.
export function* exampleSaga() {
    //while (true) {
    //    yield take('GET_PRODUCTS_REQUEST');

    //    const { response, error } = yield call(axios.get('someUrl'));

    //    if (response) {
    //        yield put(someResponseSuccessActionHere());
    //    } else {
    //        yield put(someErrorResponseActionHere());
    //    }
    //}
}

export default function* rootSaga() {
    yield [
        //fork(exampleSaga), // Used as an example to 'wire-up' a saga to listen for actions
        fork(() => true), // DELETE this when you add your saga, it is purely a placeholder
    ];
}
