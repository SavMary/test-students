import React from 'react';
import './FilterHeader.scss';

export const FilterHeader: React.FC = () => {
  return (
    <div className='filterComponent'>
    <div className='filter__container'>
      <div className='filter'>
        <a href='#home' className='filter__filterBy'>show all</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a href='#home' className='filter__filterBy'>All grades</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a href='#home' className='filter__filterBy'>All classes</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a href='#home' className='filter__filterBy'>Av.Score</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a href='#home' className='filter__filterBy'>Av.Speed</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <div className='filter'>
        <a href='#home' className='filter__filterBy'>All Classes</a>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/24XtWApHtH3QFhuD24Hx.svg"}
          alt=""
        />
      </div>
      <button className='filter__button'>
        <img className='filter__clear' 
          src={"https://file.rendit.io/n/MeUKcoi6WUhzRPPYXimy.svg"} 
          alt=""
        />
        <p className='filter__filterBy'>clear all</p>
      </button>
    </div>
  </div>
  )
}
