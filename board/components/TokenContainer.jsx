import { connect } from 'react-redux';

import { changeHP } from '../actions';

import TokenView from './TokenView';

// If this component needs to access global application state, edit this
// function and include in `connect` function call below
// function mapStateToProps(state) {
//   return {};
// }

// TODO how does this:
// 1. take props (to specify combatant name)
// 2. look up combatant from state
// 3. pass that combatant only to the TokenView?

function mapDispatchToProps(dispatch) {
  return { changeHP: () => dispatch(changeHP()) };
}

const Token = connect(
  // mapStateToProps,
  mapDispatchToProps
)(TokenView);

export default Token;
