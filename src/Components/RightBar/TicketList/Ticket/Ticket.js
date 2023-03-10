import Style from './Ticket.module.css'

const Ticket = ({ el }) => {
  let imgH = 'https://pics.avs.io/99/36/' + el.carrier + '.png'
  const Line = (props) => {
    let datetime = Date.parse(el.segments[props.number].date.slice(0, -5))
    let date = new Date(datetime)
    let transfers = el.segments[props.number].stops.length

    let textTransfer
    switch (transfers) {
      case 0:
        {
          textTransfer = 'БЕЗ ПЕРЕСАДОК'
        }
        break
      case 1:
        {
          textTransfer = ' ПЕРЕСАДКА'
        }
        break
      case 2:
        {
          textTransfer = ' ПЕРЕСАДКИ'
        }
        break
      case 3:
        {
          textTransfer = ' ПЕРЕСАДОК'
        }
        break
      default:
        textTransfer = 'БЕЗ ПЕРЕСАДОК'
    }
    return (
      <div className={Style.line}>
        <div className={Style.cell}>
          <span className={Style.cell_header}>
            {el.segments[props.number].origin} - {el.segments[props.number].destination}
          </span>
          <span>
            {date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}ч :{' '}
            {date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}м
          </span>
        </div>
        <div className={Style.cell}>
          <span className={Style.cell_header}>В ПУТИ</span>
          <span>
            {Math.floor(el.segments[props.number].duration / 60)}ч :{' '}
            {el.segments[props.number].duration % 60 < 10
              ? '0' + (el.segments[props.number].duration % 60)
              : el.segments[props.number].duration % 60}
            м
          </span>
        </div>
        <div className={Style.cell}>
          <span className={Style.cell_header}>
            {transfers !== 0 ? transfers : null}
            {textTransfer}
          </span>
          <span>{el.segments[props.number].stops.toString()}</span>
        </div>
      </div>
    )
  }
  return (
    <div className={Style.Ticket} key={el.price + el.carrier}>
      <div className={Style.header}>
        <span className={Style.price}>{el.price}р</span>
        <div className={Style.logo}>
          <img alt={imgH} src={imgH} />
        </div>
      </div>
      <div className={Style.body}>
        <Line number={0} />
        <Line number={1} />
      </div>
    </div>
  )
}

export default Ticket
