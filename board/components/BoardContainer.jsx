import BoardView from './BoardView';

// BoardContainer
// Injects state and action dispatchers into the Component, thus decoupling the
// presentation from state management.
import { connect } from 'react-redux';

import { changeHP } from '../actions';

function mapStateToProps(state) {
  return { combatants: state.combatants };
}

function mapDispatchToProps(dispatch) {
  return { changeHP: (name, hpChange) => dispatch(changeHP(name, hpChange)) };
}

const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardView);

export default Board;
