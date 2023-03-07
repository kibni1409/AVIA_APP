import { connect } from 'react-redux'
//import { useEffect } from 'react'

import LeftBar from '../LeftBar/LeftBar'
import RightBar from '../RightBar/RightBar'
import { setSearchIdThunk } from '../../Redux/Reducer'

import Style from './Body.module.css'

const Body = () => {
  // useEffect(() => {
  //   props.setSearchID()
  // }, [])
  return (
    <div className={Style.Body}>
      {/*{props.count}*/}
      <LeftBar />
      <RightBar />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchID: () => {
      dispatch(setSearchIdThunk())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Body)
