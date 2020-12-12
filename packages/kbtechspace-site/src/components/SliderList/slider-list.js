import React from 'react'

import Ribbon from '../Ribbon/ribbon'
import './slider-list.scss'

function barWidth(value){
  let style = {
    width: `${value}%`
  }
  return style;
}

const SliderList = (props) => (
    <div className="kbts-slider">
      <p className="kbts-slider-title">{props.text}</p>
      <div className="kbts-slider-bar">
        <div className="kbts-slider-bar-progress" style={barWidth(props.value)}>
        <span className="kbts-slider-bar-value">{props.value}</span>
        </div>
      </div>
    </div>
)

export default SliderList
