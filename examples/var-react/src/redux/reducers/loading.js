const LOADING = 'LOADING'
const LOADING_ERROR = 'LOADING_ERROR'
const LOADING_SUCCESS = 'LOADING_SUCCESS'

export const loading = () => ({
  type: LOADING
})

export const loadingSuccess = () => ({
  type: LOADING_SUCCESS
})

export const loadingError = errorMessage => ({
  type: LOADING_ERROR,
  payload: errorMessage
})

const initialState = {
  isLoading: false,
  errorMessage: ''
}

export default (state = initialState, action) => {
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
