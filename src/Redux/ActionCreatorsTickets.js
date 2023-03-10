export const SearchIdAC = (id) => {
  return {
    type: 'ticket/SEARCH_ID',
    id: id,
  }
}
export const setLoadingAC = (bool) => {
  return {
    type: 'ticket/SET_LOADING',
    isLoading: bool,
  }
}
export const TicketAC = (list) => {
  return {
    type: 'ticket/SET_TICKET',
    list: list,
  }
}

export const SortAC = (name) => {
  return {
    type: 'ticket/SET_SORT',
    sort: name,
  }
}

export const FilterAC = (name) => {
  return {
    type: 'ticket/SET_FILTER',
    filters: name,
  }
}
