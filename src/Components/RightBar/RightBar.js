import { Skeleton } from 'antd'

import Style from './RightBar.module.css'
import Sort from './Sort/Sort'
import TicketList from './TicketList/TicketList'

const RightBar = (props) => {
  const Skeletons = () => {
    return (
      <>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </>
    )
  }
  return (
    <div className={Style.RightBar}>
      <Sort sort={props.sort} setSort={props.setSort} />
      {props.isLoading ? (
        <Skeletons />
      ) : (
        <TicketList tickets={props.tickets} sort={props.sort} filters={props.filters} />
      )}
    </div>
  )
}

export default RightBar
