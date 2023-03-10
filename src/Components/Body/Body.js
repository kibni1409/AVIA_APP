import { connect } from 'react-redux'
import { useEffect } from 'react'

import LeftBar from '../LeftBar/LeftBar'
import RightBar from '../RightBar/RightBar'
// eslint-disable-next-line import/named
import { setFilterThunk, setSortThunk, setTicketThunk } from '../../Redux/Reducer'

import Style from './Body.module.css'

const Body = (props) => {
  useEffect(() => {
    props.setTicket()
  }, [])
  return (
    <div className={Style.Body}>
      <LeftBar filters={props.filters} setFilter={props.setFilter} />
      <RightBar
        tickets={props.tickets}
        filters={props.filters}
        isLoading={props.isLoading}
        sort={props.sort}
        setSort={props.setSort}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    searchID: state.searchID,
    tickets: state.tickets,
    isLoading: state.isLoading,
    sort: state.sort,
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTicket: () => {
      dispatch(setTicketThunk())
    },
    setSort: (name) => {
      dispatch(setSortThunk(name))
    },
    setFilter: (filter) => {
      dispatch(setFilterThunk(filter))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Body)
