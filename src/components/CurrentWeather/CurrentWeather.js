import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import image from '../../assets/images/weather.svg';
import './CurrentWeather.scss'

const WeatherImg = React.lazy(() => import('./WeatherImage'));

export const CurrentWeather_ = props => <div className='weather'>
  <React.Suspense fallback={<img src={image} className='weather_icon' alt='weather icon' />}>
    <WeatherImg weather={props.weather} />
  </React.Suspense>

  <div className='weather_temperature'>
    {props.temperature}°C
  </div>

  <div className='weather_humidity'>
    {props.humidity}%
  </div>
</div>

CurrentWeather_.propTypes = {
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  weather: PropTypes.string
}

const mapStateToProps = state => ({
  temperature: state.weather.temperature,
  humidity: state.weather.humidity,
  weather: state.weather.weather
})

export default connect(mapStateToProps)(CurrentWeather_);