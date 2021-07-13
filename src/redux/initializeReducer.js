import { getValute } from "./api";

const SET_INIT = "SET_INIT"

export const initApp = (valutes) => ({ type: SET_INIT, valutes});

export const initAppTC = () => async (dispatch) => {
  const response = await getValute();
  if (response) dispatch(initApp(response.data.Valute));
}

const initialState = {
  valutes: []
}

const initializeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      const valutes = []
      for (const i in action.valutes) {
        valutes.push([i, action.valutes[i].Value])
      }
      return {
        ...state,
        valutes: valutes,
      }
    default:
      return state
  }
}

export default initializeReducer;