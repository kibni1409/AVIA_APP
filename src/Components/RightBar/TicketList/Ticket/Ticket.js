import Style from './Ticket.module.css'
const Ticket = () => {
  return (
    <div className={Style.Ticket}>
      <div className={Style.header}>
        <span className={Style.price}>13 400р</span>
        <div className={Style.logo}></div>
      </div>
      <div className={Style.body}>
        <div className={Style.line}>
          <div className={Style.cell}>
            <span className={Style.cell_header}>MOW - HKT</span>
            <span>10:45 - 08:00</span>
          </div>
          <div className={Style.cell}>
            <span className={Style.cell_header}>В ПУТИ</span>
            <span>21ч 15м</span>
          </div>
          <div className={Style.cell}>
            <span className={Style.cell_header}>2 ПЕРЕСАДКИ</span>
            <span>HKG, JNB</span>
          </div>
        </div>
        <div className={Style.line}>
          <div className={Style.cell}>
            <span className={Style.cell_header}>MOW - HKT</span>
            <span>11:25 - 00:50</span>
          </div>
          <div className={Style.cell}>
            <span className={Style.cell_header}>В ПУТИ</span>
            <span>13ч 30м</span>
          </div>
          <div className={Style.cell}>
            <span className={Style.cell_header}>1 ПЕРЕСАДКА</span>
            <span>HKG</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
