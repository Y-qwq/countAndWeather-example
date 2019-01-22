import React, { Component } from 'react'

class CountAndWeahter extends Component {
  render() {

    const {count, onClickAdd, onClickLess,weather,state,onClickFetch} = this.props

    return (
      <div>
          Count : {count}
          <br/><br/>
          <button onClick={onClickAdd}>增加</button>
          <br/><br/>
          <button onClick={onClickLess}>减少</button>
          <br/><br/>
          {state === "success"?<p>城市：{weather.city}，风向：{weather.WD}</p>:''}
          
          <button onClick={onClickFetch}>获取天气</button>
      </div>
    );
  }
}

export default CountAndWeahter;