import classNames from 'classnames';
import React from 'react'
import { Test } from '../../react-app-env';

type Props = {
    test: Test,
    index: number,
    speed: string | null
}

export const TestData: React.FC<Props> = ({test, index, speed}) => {
  return (
    <div className="testTable__header">
      <p className="testTable__header-id">{index + 1}</p>
      <p className="testTable__header-label">{test.label}</p>
      {test.score ? (<p className={classNames('testTable__header-score', {
              red: test.score < 50,
              yellow: test.score < 80,
              green: test.score < 90,
              blue: test.score > 90,
            })}>
      
        {test.score}</p>) : (
            <p className='testTable__header-score'>NIL</p>
        )}
        {speed ? (<p className={classNames("testTable__header-speed", {
              red: speed === 'Below Expected',
              green: speed === 'As Expected',
              blue: speed === 'Above Expected',
      })}>
        {test.speed}</p>
        ) : (<p className='testTable__header-speed'>NIL</p>)}
      
      <p className="testTable__header-total">{test.total}</p>
      <p className="testTable__header-exp">{test.expSpeed}</p>
      <p className="testTable__header-concept">{test.concept}</p>
      <p className="testTable__header-date">{test.date}</p>
      <label className="testTable__header-absent">
        <input type={'checkbox'} className="testTable__header-checkbox"/>
      </label>
    </div>
  );
}
