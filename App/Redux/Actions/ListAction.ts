export const LIST_LOADING = "LIST_LOADING" ;
export const LIST_SUCCESS = "LIST_SUCCESS" ;
export const LIST_ERROR = "LIST_ERROR";
export const LIST_FAVOURITE = "LIST_FAVOURITE"

export const initialState =  {
    loading:false,
    error:null,
    data:null, 
    id: null,
    favData: [],
}

export const listLoading = () => {
    return {
        type: LIST_LOADING,
        payload: null,
    }
}

export const listSuccess = (data) => {
    return {
        type: LIST_SUCCESS,
        payload: data,
    }
}

export const listError = (data) => {
    return {
        type: LIST_ERROR,
        payload: data,
    }
}

export const listFavourite = (id) => {
    return {
        type: LIST_FAVOURITE,
        payload: id,
    }
}

