import {
    initialState,
    LIST_LOADING,
    LIST_SUCCESS,
    LIST_ERROR,
    LIST_FAVOURITE,
  } from '../Actions/ListAction';
  
  export const listReducer = (state = initialState, action) => {
    switch (action.type) {
      case LIST_LOADING:
        return {
          ...state,
          loading: true,
          error: null,
          data: null,
        };
  
      case LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload,
        };
  
      case LIST_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          data: null,
        };
      case LIST_FAVOURITE:
        let data = [];
        let previousData = state.favData
        let filt = previousData
        if (filt.filter(x=>x===action.payload).length>0) {
          data = previousData.filter(x => x !== action.payload);
        } else {
          data = previousData.push(action.payload);
        }
        state.favData = Array.isArray(data) ? data : state.favData
        return {
          ...state,
        };
    }
    return state;
  };
  