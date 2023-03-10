import React, { useState } from 'react'
import { Alert, Button } from 'antd'

import Style from './TicketList.module.css'
import Ticket from './Ticket/Ticket'

const TicketList = React.memo(function TicketList(props) {
  const [count, setCount] = useState(6)
  function onClick() {
    setCount((count) => count + 5)
  }
  let ElementsTickets = []
  let SortElements = props.tickets.sort((a, b) => {
    if (props.sort[0].active === true) {
      return a.price - b.price
    }
    if (props.sort[1].active === true) {
      return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    }
    if (props.sort[2].active === true) {
      if (a.price === b.price) {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      } else {
        return a.price - b.price
      }
    }
  })
  let filterLength = []
  props.filters.length !== 0 ? props.filters.map((el) => (el.active ? filterLength.push(el.quantity) : null)) : null
  let FilterElements = []
  SortElements.map((el) => {
    if (filterLength.includes(el.segments[0].stops.length) && filterLength.includes(el.segments[1].stops.length)) {
      FilterElements.push(el)
    }
  })

  if (FilterElements.length === 0) {
    ElementsTickets.push(<Alert type={'error'} message="Таких билетов нет, выбирите критерии" />)
  } else {
    for (let i = 1; i < count; i++) {
      ElementsTickets.push(
        <Ticket key={FilterElements[i].price + FilterElements[i].carrier + i} el={FilterElements[i]} />
      )
    }
  }
  return (
    <div className={Style.TicketList}>
      {ElementsTickets}
      <Button type="primary" onClick={onClick}>
        Еще билеты
      </Button>
    </div>
  )
})

export default TicketList
