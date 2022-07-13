import React from 'react';
import { FilterHeader } from '../FilterHeader/FilterHeader';
import { SubHeader } from '../SubHeader/SubHeader';
import './Header.scss';

export const Header = () => {
  return (
    <>
      <div className="mainHeader">
        <div className="mainHeader__logo">
          <div className="mainHeader__dropDown">
            <p className="text1">School 1</p>
            <img
              className="arrowdropdown"
              src={'https://file.rendit.io/n/A6RXHyPD0Zl7RsWdgSc2.svg'}
              alt=""
            />
          </div>
        </div>
        <div className="mainHeader__menu">
          <a href="#home" className="text1">
            Analytics
          </a>
          <a href="#home" className="text1">
            gradebooks
          </a>
          <a href="#home" className="text1">
            Tests
          </a>
          <a href="#home" className="mainHeader__selected-text">
            Students
          </a>
          <a href="#home" className="text1">
            Teachers
          </a>
          <a href="#home" className="text1">
            archive
          </a>
        </div>
        <div className="mainHeader__userName">
          <div className="mainHeader__dropDown">
            <img
              className="ellipse"
              src={'https://file.rendit.io/n/ssNNBrcrqcCPnQ8dyieZ.png'}
              alt=""
            />
            <img
              className="arrowdropdown"
              src={'https://file.rendit.io/n/A6RXHyPD0Zl7RsWdgSc2.svg'}
              alt=""
            />
          </div>
        </div>
      </div>
      <FilterHeader />
      <SubHeader />
    </>
  );
}
