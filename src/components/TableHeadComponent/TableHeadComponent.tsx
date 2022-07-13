import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredByTitleSelector } from '../../store/selectors';
import { TableComponent } from '../TableComponent/TableComponent';
import './TableHeadComponent.scss';

type Props = {
  title: string;
}

export const TableHeadComponent: React.FC<Props>= ({ title }) => {
  const filteredByTitle = useSelector(getFilteredByTitleSelector(title));
  console.log(filteredByTitle, 'filtered');

  return (
    <div className='tableContainer'>
      <div className="table">
        <div className="tableLine">
          <label className='table__checkbox'>
            <input type="checkbox" />
          </label>

          <div className='table__flex'>
            <p className='table__name'>Name</p>
            <img
              src="https://file.rendit.io/n/NAFPya2vlkn7RhC37dtp.svg"
              alt=""
            />
          </div>

          <div className='table__flex'>
            <p className="table__id">ID</p>
            <div className='table__buttons--id'>
              <button className='table__button'>{'^'}</button>
              <button className='table__button table__button--rotate'>{'^'}</button>
            </div>
          </div>

          <div>
          <p className="table__class">Class</p>
          </div>

          <div className='table__flex'>
            <p className="table__score table__score--filter">Av. Score, %</p>
            <div className='table__buttons'>
              <button className='table__button'>{'^'}</button>
              <button className='table__button table__button--rotate'>{'^'}</button>
            </div>
          </div>

          <div className='table__flex'>
            <p className="table__speed">Av. Speed</p>
            <div className='table__buttons--speed'>
              <button className='table__button'>{'^'}</button>
              <button className='table__button table__button--rotate'>{'^'}</button>
            </div>
          </div>

          <p className="table__parents">Parents</p>
        </div>
      </div>
      {
        filteredByTitle.map(item => (
          <React.Fragment key={item.id}>
            <TableComponent data={item}/>
          </React.Fragment>
        ))
      }
    </div>
  );
}
