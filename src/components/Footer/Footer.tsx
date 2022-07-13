import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCurrentPage, setCurrentSize } from '../../store';
import { getCurrentPageSelector, getCurrentSizeSelector, getTotalPageSelector, getTotalSizeSelector } from '../../store/selectors';
import './Footer.css';

export const Footer: React.FC = () => {
  const dispatch = useDispatch();

  const totalPage = useSelector(getTotalPageSelector);
  const totalSize = useSelector(getTotalSizeSelector);
  const currentSize = useSelector(getCurrentSizeSelector);
  const currentPage = useSelector(getCurrentPageSelector);

  const [options, setOptions] = useState<number[]>([]);
  const [availableToIncrease, setAvailableToIncrease] = useState(true);
  const [availableToDecrease, setAvailableToDecrease] = useState(false);

  const createOptions = () => {
    const array: number[] = [];
    for (let i = 1; i <= totalSize; i++) {
        array.push(i);
    }
    setOptions(array);
  }

  useEffect(() => {
    createOptions();
  }, [totalPage]);

  const countOfRows = (amount: string) => {
    dispatch(setCurrentSize(+amount));
  }

  const increaseSize = () => {
    if (currentPage === totalPage) {
      setAvailableToIncrease(false);
    } else {
      setAvailableToIncrease(true);
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  const decreaseSize = () => {
    if (currentPage === 0) {
      setAvailableToDecrease(false);
    } else {
      setAvailableToDecrease(true);
      dispatch(setCurrentPage(currentPage - 1))
    }
  }
  
  return (
    <div className='footer'>
        <p>Rows per page:</p>
        <p>{currentSize}</p>
        <select 
          className='footer__selector'
          value={currentSize}
          onChange={(e) => countOfRows(e.target.value)}
        >
            {options.map(count => (
                <option 
                  value={count} 
                  key={count}
                >
                  {count}
                </option>
            ))}
        </select>
        <p>{`${currentSize} off ${totalSize}`}</p>
        <label className='footer__move'>
          <button
            className='footer__arrow'
            onClick={decreaseSize}
            disabled={!availableToDecrease}
          >
            {'<'}
          </button>
        </label>
       <label className='footer__move'>
          <button
            className='footer__arrow'
            onClick={increaseSize}
            disabled={!availableToIncrease}
          >
            {'>'}
          </button>
       </label>
    </div>
  )
}
