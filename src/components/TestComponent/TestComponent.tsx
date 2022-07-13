import React from 'react';
import { Test } from '../../react-app-env';
import './TestComponent.css';

type Props = {
    tests: Test[] | null,
};

export const TestComponent: React.FC<Props> = ({ tests }) => {
  return (
    <div className="testTable">
      <div className="testTable__container">
        <div className="testTable__info">
          <p className="student">Student:</p>
          <p className="student__data">Nicole Kidman</p>
          <p className="student">id:</p>
          <p className="student__data">7512552212</p>
        </div>
        <div className="testTable__buttons">
          <button className="button">All concepts</button>
          <button className="button">All score</button>
          <button className="button">All speed</button>
          <label>
            <input type={'date'} className="testTable__data" />
          </label>
        </div>
        <div className="testTable__row" />
        <div className="testTable__score">
          <p className="point">Score</p>
          <p className="testTable__blue">
            <span className="testTable__blue-circle"></span> 90%+ accuracy
          </p>
          <p className="testTable__green">
            <span className="testTable__green-circle"></span>80 - 89% accuracy
          </p>
          <p className="testTable__yellow">
            <span className="testTable__yellow-circle"></span>50 - 79% accuracy
          </p>
          <p className="testTable__red">
            <span className="testTable__red-circle"></span>below 50% accuracy
          </p>
        </div>
        <div className="testTable__speed">
          <p className="point">speed</p>
          <p className="testTable__blue">
            <span className="testTable__blue-circle"></span>above expected
          </p>
          <p className="testTable__green">
            <span className="testTable__green-circle"></span>as expected
          </p>
          <p className="testTable__red">
            <span className="testTable__red-circle"></span>below expected
          </p>
        </div>
        <div className="testTable__header">
          <p className="testTable__header-id">#</p>
          <p className="testTable__header-label">Test Label</p>
          <p className="testTable__header-score">Score</p>
          <p className="testTable__header-speed">Speed</p>
          <p className="testTable__header-total">Total Q-ns</p>
          <p className="testTable__header-exp">Exp. Speed</p>
          <p className="testTable__header-concept">Concept</p>
          <p className="testTable__header-date">Date</p>
          <p className="testTable__header-absent">Absent</p>
        </div>
        <div className="testTable__header">
          {tests && tests.map((test, i )=> (
            <React.Fragment key={test.label}>
              <p className="testTable__header-id">{i + 1}</p>
              <p className="testTable__header-label">{test.label}</p>
              <p className="testTable__header-score">{test.score}</p>
              <p className="testTable__header-speed">{test.speed}</p>
              <p className="testTable__header-total">{test.total}</p>
              <p className="testTable__header-exp">{test.expSpeed}</p>
              <p className="testTable__header-concept">{test.concept}</p>
              <p className="testTable__header-date">{test.date}</p>
              <p className="testTable__header-absent">{test.abcent}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
