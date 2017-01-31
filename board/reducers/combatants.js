// Expresses how state related to combatants changes as actions arrive.
// Note: reducers MUST not have side effects, so don't update the state; return a new one.
// The default value is this store's initial values.

const STATUS = {
  CONSCIOUS: 'CONSCIOUS',
  UNCONSCIOUS: 'UNCONSCIOUS',
  DEAD: 'DEAD',
};

// TODO load this from user input or server
const defaultState = {
  Cael: {
    name: 'Cael',
    status: STATUS.CONSCIOUS,
    hp: 52,
    stats: {
      maxHP: 52,
      ac: 14,
    },
  },
  Miso: {
    name: 'Miso',
    status: STATUS.CONSCIOUS,
    hp: 49,
    stats: {
      maxHP: 60,
      ac: 16,
    },
  },
};

// changeHPHandler updates app state given the CHANGE_HP action
const changeHPHandler = (state, action) => {
  const { combatantName, hpChange } = action;
  const combatant = state[combatantName];
  if (!combatant) {
    throw new Error(`Combatant ${combatantName} does not exist in app state`);
  }

  const newHP = combatant.hp - hpChange;

  let status = STATUS.CONSCIOUS;
  if (Math.abs(newHP) >= combatant.stats.maxHP) {
    status = STATUS.DEAD;
  } else if (newHP <= 0) {
    status = STATUS.UNCONSCIOUS;
  }

  // Clone the combatant to a new object so we don't mutate state, then apply
  // HP and status changes
  const newCombatant = Object.assign({}, combatant, {
  // 5e doesn't support negative HP, so round up to 0
    hp: Math.max(newHP, 0),
    status,
  });
  const update = {};
  update[combatantName] = newCombatant;

  return Object.assign({}, state, update);
};

export default function counter(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_HP':
      return changeHPHandler(state, action);
    default:
      return state;
  }
}
