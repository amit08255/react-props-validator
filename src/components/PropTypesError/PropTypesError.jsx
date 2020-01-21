import React from 'react';
import PropTypes from 'prop-types';
import styles from './PropTypesError.css';
import SadIcon from './sad.svg';

const PropTypesError = (props) => {
  const handleIconClick = () => {
    props.errors.forEach((error) => {
      console.error(error.message);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          className={styles.icon}
          onClick={handleIconClick}
          src={props.icon}
          alt="Diagram icon"
        />
        <p className={styles.description}>
          Sorry, but we can&apos;t show the diagram because a configuration error occurred.
        </p>
      </div>
    </div>
  );
};

PropTypesError.propTypes = {
  icon: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.object),
};

PropTypesError.defaultProps = {
  icon: SadIcon,
};

export default PropTypesError;
