import React, { PropTypes } from 'react';

import './BoardView.less';

// TODO refactor to use TokenContainer component
import TokenView from './TokenView';

const getHPChangeUserInput = () => {
  // TODO actually get user input
  const hpChange = 10;
  return hpChange;
};

export default function BoardView({ combatants, changeHP }) {
  const combatantNames = Object.keys(combatants);
  const teamOneTokens = combatantNames.map((name) => {
    const combatant = combatants[name];
    return (<TokenView
      key={combatant.name}
      status={combatant.status}
      name={combatant.name}
      hp={combatant.hp}
      maxHP={combatant.maxHP}
      changeHP={() => changeHP(name, getHPChangeUserInput())}
    />);
  });

  return (<div className="board">
    <h1>5e Commander</h1>
    {teamOneTokens}
  </div>);
}

BoardView.propTypes = {
  combatants: PropTypes.object.isRequired,
  changeHP: PropTypes.func.isRequired,
};
