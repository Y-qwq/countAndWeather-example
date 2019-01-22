import axios from 'axios';

export const add = () => {
  return {
    type: "ADD"
  };
};

export const less = () => {
  return {
    type: "LESS"
  };
};

const getWeatherSuccess = (payload) => {
  return {
    type: "SUCCESS",
    payload
  }
}

const getWeatherError = () => {
  return {
    type: "ERROR"
  }
}

// export const getWeather = () => {
//   return (dispatch, getState) => {
//     return (
//       // setTimeout(()=>{
//       //   dispatch(add())
//       // },2000)
//       fetch(
//         "http://www.weather.com.cn/data/sk/101280101.html"
//       )
//         .then(response => {
//           console.log("testGetState : "+getState().count)
//           response.json().then(result => {
//             dispatch(getWeatherSuccess(result.weatherinfo));
//           });
//         })
//         .catch(() => {
//           dispatch(getWeatherError());
//         })
//     );
//   };
// };

// export const getWeather = () => {
//   return async dispatch => {
//     try{
//       const response = await axios.get(
//         "http://www.weather.com.cn/data/sk/101280101.html"
//       )
//       return dispatch(getWeatherSuccess(response.data.weatherinfo));
//     }catch(err){
//       return (
//         dispatch(getWeatherError())
//       );
//     }
//   };
// };

export const getWeather = () => {
  return async (dispatch, getState) => {
    try {
      console.log(getState())
      const response = await fetch(
        "http://www.weather.com.cn/data/sk/101280101.html"
      );
      const data = await response.json();
      dispatch(getWeatherSuccess(data.weatherinfo));
    } catch (err) {
      dispatch(getWeatherError());
    }
  };
};