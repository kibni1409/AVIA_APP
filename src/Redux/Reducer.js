import { TicketsAPI } from './API'

const SEARCH_ID = 'ticket/SEARCH_ID'

const initialState = {
  count: 15,
}

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ID: {
      return {
        ...state,
        count: action.id,
      }
    }
    default:
      return state
  }
}

export const SearchIdAC = (id) => {
  return {
    type: 'ticket/SEARCH_ID',
    id: id,
  }
}

export const setSearchIdThunk = () => {
  return async (dispatch) => {
    let response = await TicketsAPI.SearchID()
    dispatch(SearchIdAC(response))
  }
}
