import { Radio } from 'antd'
import { useState } from 'react'

import Style from './Sort.module.css'

const Sort = (props) => {
  let name
  props.sort.map((el) => (el.active === true ? (name = el.name) : null))
  const [active, setActive] = useState(name)
  function onChangeButton(e) {
    setActive(e.target.value)
    props.setSort(e.target.value)
  }
  return (
    <div className={Style.Sort}>
      <Radio.Group defaultValue={active} buttonStyle="solid" size="large">
        <Radio.Button value="Cheap" onChange={onChangeButton}>
          САМЫЙ ДЕШЕВЫЙ
        </Radio.Button>
        <Radio.Button value="Fast" onChange={onChangeButton}>
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button value="Optimal" onChange={onChangeButton}>
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default Sort
