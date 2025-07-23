import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterReducer';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        Find contacts by name:
        <input
          className={styles.input}
          type="text"
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;