import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../api/api';
import { setData, setTotalPage, setTotalSize } from '../../store';
import { CSVLink } from 'react-csv';
import { TableHeadComponent } from '../TableHeadComponent/TableHeadComponent';
import './SubHeader.scss';
import { useSelector } from 'react-redux';
import { getCurrentPageSelector, getCurrentSizeSelector, getDataSelector } from '../../store/selectors';
import { SelectedComponent } from '../SelectedComponent/SelectedComponent';

export const headers = [
  {label: "Name", key: "name"},
  {label: "ID", key: "id"},
  {label: "Class", key: "class"},
  {label: "Score", key: "score"},
  {label: "Speed", key: "speed"},
  {label: "Parents", key: "parents"},
];

export const SubHeader: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getDataSelector);
  const page = useSelector(getCurrentPageSelector);
  const size = useSelector(getCurrentSizeSelector);

  const [title, setTitle] = useState('');

  const csvReport = {
    "fileName": 'Report.csv',
    headers,
    data,
  }

  const setTotalParams = async () => {
    const dataFromServer = await getData(page, size);
    dispatch(setTotalPage(dataFromServer.totalPages));
    dispatch(setTotalSize(dataFromServer.totalCount));
  }
  useEffect(() => {
    try {
      setTotalParams();
    } catch (error) {
      console.log(error)
    }
  },[])

  const loadDataFromServer = async () => {
    const dataFromServer = await getData(page, size);

    dispatch(setData(dataFromServer.data));
  };

  useEffect(() => {
    try {

      loadDataFromServer();
    } catch (error) {

      console.log(error);
    }
  }, [page, size]);
console.log(data, 'data')
  return (
    <>
      <div className="head">
        <p className="head__text">Students</p>
        <div className="head__search">
          <label className="head__label">
            <input
              className="head__input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Student Name, Parent or ID here"
            />
          </label>
        </div>
        <button 
          type='button'
          className="head__button"
        >
          <img
            className="search"
            src={'https://file.rendit.io/n/nPbnskXg4iEFZKCumB8F.svg'}
            alt=""
          />
          <CSVLink {...csvReport} className="head__export">Export CSV</CSVLink>
        </button>
      </div>
      <SelectedComponent />
      <TableHeadComponent title={title} />
    </>
  );
}
