import { TicketsAPI } from './API'
import { FilterAC, SearchIdAC, setLoadingAC, SortAC, TicketAC } from './ActionCreatorsTickets'

const SEARCH_ID = 'ticket/SEARCH_ID'
const SET_TICKET = 'ticket/SET_TICKET'
const SET_LOADING = 'ticket/SET_LOADING'
const SET_SORT = 'ticket/SET_SORT'
const SET_FILTER = 'ticket/SET_FILTER'

const initialState = {
  searchID: null,
  tickets: [
    {
      // Цена в рублях
      price: 0,
      // Код авиакомпании (iata)
      carrier: 'string',
      // Массив перелётов.
      // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
      segments: [
        {
          // Код города (iata)
          origin: 'string',
          // Код города (iata)
          destination: 'string',
          // Дата и время вылета туда
          date: 'string',
          // Массив кодов (iata) городов с пересадками
          stops: ['string'],
          // Общее время перелёта в минутах
          duration: 0,
        },
        {
          // Код города (iata)
          origin: 'string',
          // Код города (iata)
          destination: 'string',
          // Дата и время вылета обратно
          date: 'string',
          // Массив кодов (iata) городов с пересадками
          stops: ['string'],
          // Общее время перелёта в минутах
          duration: 0,
        },
      ],
    },
  ],
  isLoading: true,
  sort: [
    { name: 'Cheap', active: false },
    { name: 'Fast', active: false },
    { name: 'Optimal', active: true },
  ],
  filters: [
    {
      name: 'Все',
      active: false,
    },
    {
      name: 'Без пересадок',
      active: true,
      quantity: 0,
    },
    {
      name: '1 пересадка',
      active: false,
      quantity: 1,
    },
    {
      name: '2 пересадки',
      active: false,
      quantity: 2,
    },
    {
      name: '3 пересадки',
      active: false,
      quantity: 3,
    },
  ],
}

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ID: {
      return {
        ...state,
        searchID: action.id,
      }
    }
    case SET_TICKET: {
      return {
        ...state,
        tickets: [...state.tickets, ...action.list],
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      }
    }
    case SET_SORT: {
      return {
        ...state,
        sort: state.sort.map((el) => {
          if (el.name === action.sort) {
            return {
              name: el.name,
              active: true,
            }
          } else {
            return {
              name: el.name,
              active: false,
            }
          }
        }),
      }
    }
    case SET_FILTER: {
      let res = state.filters.map((el) => {
        if (action.filters.includes(el.name)) {
          return {
            name: el.name,
            active: true,
            quantity: el.quantity,
          }
        } else {
          return {
            name: el.name,
            active: false,
            quantity: el.quantity,
          }
        }
      })
      return {
        ...state,
        filters: [...res],
      }
    }
    default:
      return state
  }
}
export const setSearchIdThunk = () => {
  return async (dispatch) => {
    let responseSearchID = await TicketsAPI.SearchID()
    dispatch(SearchIdAC(responseSearchID))
  }
}
export const setTicketThunk = () => {
  return async (dispatch, getState) => {
    dispatch(setLoadingAC(true))
    async function search() {
      let responseTickets
      try {
        responseTickets = await TicketsAPI.Tickets(getState().searchID)
        if (responseTickets.data.stop === false && responseTickets.status === 200) {
          dispatch(TicketAC(responseTickets.data.tickets))
          dispatch(setTicketThunk())
        }
      } catch (error) {
        if (error.response.status === 500) {
          dispatch(setTicketThunk())
        }
      }
    }
    if (getState().searchID === null) {
      dispatch(setSearchIdThunk()).then(async () => {
        await search()
      })
    } else {
      dispatch(setLoadingAC(false))
      await search()
    }
  }
}
export const setSortThunk = (name) => {
  return async (dispatch) => {
    dispatch(SortAC(name))
  }
}
export const setFilterThunk = (filter) => {
  return async (dispatch) => {
    dispatch(FilterAC(filter))
  }
}
