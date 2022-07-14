import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Data } from '../../react-app-env';
import { getFilteredByTitleSelector } from '../../store/selectors';
// import { getByDecIdSelector, getByDecScoreSelector, getByDecSpeedSelector, getByGrowthIdSelector, getByGrowthScoreSelector, getByGrowthSpeedSelector, getFilteredByTitleSelector } from '../../store/selectors';
import { TableComponent } from '../TableComponent/TableComponent';
import './TableHeadComponent.scss';

type Props = {
  title: string;
}

export const TableHeadComponent: React.FC<Props>= ({ title }) => {
  const [availableData, setAvailableData] = useState<Data[]>([])
  const filteredByTitle = useSelector(getFilteredByTitleSelector(title));
  // const filteredByGrowthId = useSelector(getByGrowthIdSelector())
  // const filteredByDecId = useSelector(getByDecIdSelector())
  // const filteredByGrowthScore = useSelector(getByGrowthScoreSelector())
  // const filteredByDecScore = useSelector(getByDecScoreSelector())
  // const filteredByGrowthSpeed = useSelector(getByGrowthSpeedSelector())
  // const filteredByDecSpeed = useSelector(getByDecSpeedSelector())

  // useEffect(() => {
  //   setAvailableData(filteredByTitle)
  // }, [title])

  // const filterByGrowthId = () => {
  //   setAvailableData(filteredByGrowthId);
  // }
  // const filterByDecId = () => {
  //   setAvailableData(filteredByDecId);
  // }
  // const filterByGrowthScore = () => {
  //   setAvailableData(filteredByGrowthScore);
  // }
  // const filterByDecScore = () => {
  //   setAvailableData(filteredByDecScore);
  // }
  // const filterByGrowthSpeed = () => {
  //   setAvailableData(filteredByGrowthSpeed);
  // }
  // const filterByDecSpeed = () => {
  //   setAvailableData(filteredByDecSpeed);
  // }

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
              <button 
                className='table__button'
              >{'^'}</button>
              <button 
                className='table__button table__button--rotate'
              >{'^'}</button>
            </div>
          </div>

          <div>
          <p className="table__class">Class</p>
          </div>

          <div className='table__flex'>
            <p className="table__score table__score--filter">Av. Score, %</p>
            <div className='table__buttons'>
              <button 
                className='table__button'
              >{'^'}</button>
              <button 
                className='table__button table__button--rotate'
              >{'^'}</button>
            </div>
          </div>

          <div className='table__flex'>
            <p className="table__speed">Av. Speed</p>
            <div className='table__buttons--speed'>
              <button 
                className='table__button'
              >{'^'}</button>
              <button 
                className='table__button table__button--rotate'
              >{'^'}</button>
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
