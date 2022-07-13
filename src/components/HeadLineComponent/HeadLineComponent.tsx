import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../api/api';
import { Data } from '../../react-app-env';
import { setData, setTotalPage, setTotalSize } from '../../store';
import { CSVLink } from 'react-csv';
import { TableHeadComponent } from '../TableHeadComponent/TableHeadComponent';
import './HeadLineComponent.css';
import { useSelector } from 'react-redux';
import { getCurrentPageSelector, getCurrentSizeSelector, getDataSelector } from '../../store/selectors';

const headers = [
  {label: "Name", key: "name"},
  {label: "ID", key: "id"},
  {label: "Class", key: "class"},
  {label: "Score", key: "score"},
  {label: "Speed", key: "speed"},
  {label: "Parents", key: "parents"},
];

export const HeadLineComponent = () => {
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
    setTotalParams();
  },[])

  const loadDataFromServer = async () => {
    const dataFromServer = await getData(page, size);

    dispatch(setData(dataFromServer.data));
    // dispatch(setTotalPage(dataFromServer.totalPages));
    // dispatch(setTotalSize(dataFromServer.totalCount));

    console.log('total', dataFromServer.data)
  };

  useEffect(() => {
    try {

      loadDataFromServer();
    } catch (error) {

      console.log(error);
    }
  }, [page, size]);

  return (
    <>
      <div className="headlineRoot">
        <p className="text5">Students</p>
        <div className="searchMaster">
          <label className="nameIcon">
            <input
              className="enterLabelHere"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Student Name, Parent or ID here"
            />
          </label>
        </div>
        <button 
          type='button'
          className="buttonText"
        >
          <img
            className="search"
            src={'https://file.rendit.io/n/nPbnskXg4iEFZKCumB8F.svg'}
            alt=""
          />
          <CSVLink {...csvReport} className="remove">Export CSV</CSVLink>
        </button>
      </div>
      <TableHeadComponent title={title} />
    </>
  );
}
