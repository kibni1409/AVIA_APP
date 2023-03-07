import { Radio } from 'antd'

import Style from './Sort.module.css'
const Sort = () => {
  return (
    <div className={Style.Sort}>
      <Radio.Group defaultValue="a" buttonStyle="solid" size="large">
        <Radio.Button value="a">САМЫЙ ДЕШЕВЫЙ</Radio.Button>
        <Radio.Button value="b">САМЫЙ БЫСТРЫЙ</Radio.Button>
        <Radio.Button value="c">ОПТИМАЛЬНЫЙ</Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default Sort
