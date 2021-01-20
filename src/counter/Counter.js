import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../actions';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterActions.increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterActions.decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}
