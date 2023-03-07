import { Checkbox } from 'antd'
import { useState } from 'react'

import Style from './Filter.module.css'

const CheckboxGroup = Checkbox.Group
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const defaultCheckedList = ['Apple', 'Orange']
const Filter = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList)
  const [indeterminate, setIndeterminate] = useState(true)
  const [checkAll, setCheckAll] = useState(false)
  const onChange = (list) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
  }
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }
  return (
    <div className={Style.Filter}>
      <p>КОЛЛИЧЕСТВО ПЕРЕСАДОК</p>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup className={Style.Filter} options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  )
}

export default Filter
