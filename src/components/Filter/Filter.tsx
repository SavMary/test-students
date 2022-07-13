import React from 'react';
import './Filter.css';

export const Filter = () => {
  return (
    <div className='filterRoot'>
    <div className='filteringComponents'>
      <div className='filter'>
        <a className='filterBy'>show all</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a className='filterBy'>All grades</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a className='filterBy'>All classes</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a className='filterBy'>Av.Score</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a className='filterBy'>Av.Speed</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a className='filterBy'>All Classes</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <button className='buttonText'>
        <img className='clear' 
          src={"https://file.rendit.io/n/MeUKcoi6WUhzRPPYXimy.svg"} 
          alt=""
        />
        <p className='filterBy'>clear all</p>
      </button>
    </div>
  </div>
  )
}
