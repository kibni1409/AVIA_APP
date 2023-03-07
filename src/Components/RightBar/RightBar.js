import Style from './RightBar.module.css'
import Sort from './Sort/Sort'
import TicketList from './TicketList/TicketList'

const RightBar = () => {
  return (
    <div className={Style.RightBar}>
      <Sort />
      <TicketList />
    </div>
  )
}

export default RightBar
