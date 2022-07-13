import React from 'react';
import { Filter } from '../Filter/Filter';
import { HeadLineComponent } from '../HeadLineComponent/HeadLineComponent';
import './Header.css';

export const Header = () => {
  return (
    <>
      <div className='headerDirectorRoot'>
    <div className='logoschool'>
      <div className='dropdownSchool'>
        <p className='text1'>School 1</p>
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/A6RXHyPD0Zl7RsWdgSc2.svg"}
          alt=""
        />
      </div>
    </div>
    <div className='menuCategories'>
      <a href='#home' className='text1'>Analytics</a>
      <a href='#home' className='text1'>gradebooks</a>
      <a href='#home' className='text1'>Tests</a>
      <a href='#home' className='brickRedText'>Students</a>
      <a href='#home' className='text1'>Teachers</a>
      <a href='#home' className='text1'>archive</a>
    </div>
    <div className='userName'>
      <div className='dropdownSchool'>
        <img className='ellipse' 
          src={"https://file.rendit.io/n/ssNNBrcrqcCPnQ8dyieZ.png"} 
          alt=""
        />
        <img className='arrowdropdown'
          src={"https://file.rendit.io/n/A6RXHyPD0Zl7RsWdgSc2.svg"}
          alt=""
        />
      </div>
    </div>
  </div>
  <Filter />
  <HeadLineComponent />
    </>
  )
}
