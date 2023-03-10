import Filter from './Filter/Filter'

const LeftBar = (props) => {
  return <Filter filters={props.filters} setFilter={props.setFilter} />
}

export default LeftBar
