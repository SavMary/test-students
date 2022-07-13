import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCurrentPage, setCurrentSize } from '../../store';
import { getCurrentPageSelector, getCurrentSizeSelector, getTotalPageSelector, getTotalSizeSelector } from '../../store/selectors';
import './Footer.scss';

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

  const increasePage = () => {
    if (currentPage === totalPage) {
      setAvailableToIncrease(false);
    } else {
      setAvailableToIncrease(true);
      dispatch(setCurrentPage(currentPage + 1))
    }
    console.log({totalPage}, {currentPage}, 'from increase')
  }

  useEffect(() => {
    switch (true) {
      case currentPage === 1:
        setAvailableToIncrease(true);
        setAvailableToDecrease(false);
        break;

      case currentPage === totalPage:
        setAvailableToIncrease(false);
        setAvailableToDecrease(true);
        break;

      default:
        setAvailableToIncrease(true);
        setAvailableToDecrease(true);
        break;
    }
    // if (currentPage === 1) {
    //   setAvailableToIncrease(true);
    //   setAvailableToDecrease(false);
    // }

    // if (currentPage === totalPage) {
    //   setAvailableToIncrease(false);
    //   setAvailableToDecrease(true); 
    // }
  }, [currentPage])

  const decreasePage = () => {
    if (currentPage === 1) {
      setAvailableToDecrease(false);
    } else {
      setAvailableToDecrease(true);
      dispatch(setCurrentPage(currentPage - 1))
    }

    console.log({totalPage}, {currentPage}, 'from decrease')
  }
  
  return (
    <div className="footer">
      <p>Rows per page:</p>
      <p>{currentSize}</p>
      <select
        className="footer__selector"
        value={currentSize}
        onChange={e => countOfRows(e.target.value)}
      >
        {options.map(count => (
          <option value={count} key={count}>
            {count}
          </option>
        ))}
      </select>
      <p>{`${currentSize} off ${totalSize}`}</p>
      <button
          className={classNames('footer__arrow', {
            red: !availableToDecrease,
          })}
          onClick={decreasePage}
          disabled={!availableToDecrease}
        >
          {'<'}
        </button>
        <button
          className={classNames('footer__arrow', {
            red: !availableToIncrease,
          })}
          onClick={increasePage}
          disabled={!availableToIncrease}
        >
          {'>'}
        </button>
    </div>
  );
}
