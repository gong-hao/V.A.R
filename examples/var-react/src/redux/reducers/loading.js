const LOADING = 'LOADING'
const LOADING_ERROR = 'LOADING_ERROR'
const LOADING_SUCCESS = 'LOADING_SUCCESS'

export function loading() {
  return {
    type: LOADING
  }
}

export function loadingSuccess() {
  return {
    type: LOADING_SUCCESS
  }
}

export function loadingError(errorMessage) {
  return {
    type: LOADING_ERROR,
    payload: errorMessage
  }
}

const initialState = {
  isLoading: false,
  errorMessage: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        isLoading: true,
        errorMessage: ''
      }
    }
    case LOADING_SUCCESS: {
      return {
        isLoading: false,
        errorMessage: ''
      }
    }
    case LOADING_ERROR: {
      return {
        isLoading: false,
        errorMessage: action.payload
      }
    }
    default:
      return state
  }
}
