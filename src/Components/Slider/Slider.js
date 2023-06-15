import React from 'react';

import './Slider.css';

import Search from '../MovieSearch/Search';

const Slider = () => {
  return (
    <>
      <section id="slider">
        <div className="slider-img">
          <Search />
        </div>
      </section>
    </>
  )
}

export default Slider;