import { put, takeEvery, call} from "redux-saga/effects";


const fetchHolteFromApi = ({locationName, date, days}) => {


  const checkOutDate = new Date();
  checkOutDate.setDate(checkOutDate.getDate() + Number(days));
  let checkOut = checkOutDate.toISOString().slice(0, 10)
  console.log(checkOut)
  return fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${locationName}&currency=rub&checkIn=${date}&checkOut=${checkOut}&limit=10`)
  }

export function* fetchHoltelWorker(action) {
  // console.log(action.payload)
  const data = yield call(fetchHolteFromApi, action.payload)
  const json = yield call (() => new Promise(res => res(data.json())))

  yield put({type: "SET_DATA", payload: json})
}

export function* hotelWhatcher() {
  yield takeEvery('FETCH_HOTELS', fetchHoltelWorker)
}