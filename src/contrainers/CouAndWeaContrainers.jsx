import {connect} from 'react-redux'
import CountAndWeahter from '../components/CountAndWeahter'
import {add,less,getWeather} from '../action'

const mapStateToProps = state => {
    return {
        count:state.count,
        weather:state.weather.weatherInfo,
        state:state.weather.state
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onClickAdd: () => {
        dispatch(add())
      },
      onClickLess: () => {
        dispatch(less())
      },
      onClickFetch:() => {
        dispatch(getWeather())
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CountAndWeahter);