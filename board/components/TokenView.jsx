import React, { PropTypes } from 'react';

import './TokenView.less';

export default function TokenView({ status, name, hp, changeHP }) {
  return (
    <div className={`token state--${status}`} onClick={changeHP}>
      <p className="label">{name}</p>
      <p className="label">{hp}</p>
    </div>
  );
}

TokenView.propTypes = {
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hp: PropTypes.number.isRequired,
  changeHP: PropTypes.func,
};
