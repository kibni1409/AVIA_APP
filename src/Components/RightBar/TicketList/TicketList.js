import Style from './TicketList.module.css'
import Ticket from './Ticket/Ticket'
const TicketList = () => {
  return (
    <div className={Style.TicketList}>
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  )
}

export default TicketList
