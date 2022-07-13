import React, { useState } from 'react';
import { Data, Test } from '../../react-app-env';
import classNames from 'classnames';
import './TableComponent.scss';
import { TestComponent } from '../TestComponent/TestComponent';

type Props = {
  data: Data
}

export const TableComponent:React.FC<Props> = ({ data }) => {
  const [tests, setTests] = useState<Test[] | null>(null);
  const [isSelected, setIsSelected] = useState(false);

  const handlerClick = (data: Data) => {
    setTests(data.tests);
      setIsSelected(!isSelected);
  }

  return (
    <>
      <div
        onClick={() => handlerClick(data)}
        className={classNames('table', {
          oddRow: data.id % 2 !== 0,
          evenRow: data.id % 2 === 0,
        })}
      >
        <div className="tableLine">
          <label className="table__checkbox">
            <input type="checkbox" />
          </label>
          <p className="table__name">{data.name}</p>
          <p className="table__id">{data.id}</p>
          <p className="table__class">{data.class}</p>
          <p
            className={classNames('table__score', {
              red: data.score <= '50',
              yellow: data.score <= '80',
              green: data.score > '80',
              blue: data.score > '90',
            })}
          >
            {data.score}
          </p>
          <p
            className={classNames('table__speed', {
              red: data.speed === 'Below Expected',
              green: data.speed === 'As Expected',
              blue: data.speed === 'Above Expected',
            })}
          >
            {data.speed}
          </p>
          <p className="table__parents">
            {data.parents ? (
              data.parents.map(parent => <span key={parent}>{`${parent}, `}</span>)
            ) : (
              <span>No Parents Added</span>
            )}
          </p>
        </div>
      </div>
      {isSelected && <TestComponent tests={tests}/>}
    </>
  );
}
