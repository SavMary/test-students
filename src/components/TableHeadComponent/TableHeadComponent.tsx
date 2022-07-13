import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredByTitleSelector } from '../../store/selectors';
import { TableComponent } from '../TableComponent/TableComponent';
import './TableHeadComponent.css';

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

          <div className='name2'>
            <p>Name</p>
            <img
              src="https://file.rendit.io/n/NAFPya2vlkn7RhC37dtp.svg"
              alt=""
            />
          </div>

          <div className="id1">
            <p className="table__id">ID</p>
            <img
              src="https://file.rendit.io/n/4F3xOmoR8m0iwPxkCqu0.svg"
              alt=""
            />
          </div>

          <p className="table__class">Class</p>

          <div className="id1">
            <p className="table__score">Av. Score, %</p>
            <img
              src="https://file.rendit.io/n/4F3xOmoR8m0iwPxkCqu0.svg"
              alt=""
            />
          </div>

          <div className="avspeed">
            <p className="table__speed">Av. Speed</p>
            <img
              src={'https://file.rendit.io/n/4F3xOmoR8m0iwPxkCqu0.svg'}
              alt=""
            />
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
