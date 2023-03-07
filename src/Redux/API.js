import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://aviasales-test-api.kata.academy/',
})

export const TicketsAPI = {
  SearchID() {
    return instance.get('search').then((response) => response.data.searchId)
  },
  Tickets(searchId) {
    return instance.get('tickets?searchId=' + searchId).then((response) => response)
  },
}
