
const INITIAL_STATE = {
  name: '',
  descripton: '',
  type: '',
  hasBulk: false,
  hasRetail: false,
  batchNumber: 0,
  lotId: 0,
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    default:
      return state;
  }
}
