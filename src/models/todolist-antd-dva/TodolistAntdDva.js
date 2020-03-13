import * as apis from '../../services/example';

export default {

  namespace: 'todolist',

  state: {
    inputValue: '',
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname === '/todolistAntdDva') {
          dispatch({
            type: 'initItemAction',
          });
        }
      });
    },
  },

  effects: {
    *initItemAction({ payload }, { call, put }) {  // eslint-disable-line
      let initRes = yield call(apis.initItem);
      console.log(initRes.data);
      if (initRes && initRes.data.status === 'success') {
        yield put({
          type: 'initItem',
          payload: initRes.data.data
        });
      } else {
        console.log('api error');
      }
    },
  },

  reducers: {
    initItem(state, action) {
      let _state = JSON.parse(JSON.stringify(state));
      console.log(action.payload);
      _state.list = action.payload;
      return _state;
    },
    inputChange(state, action) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.inputValue = action.payload;
      return _state;
    },
    addItem(state, action) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.list = [..._state.list, _state.inputValue];
      _state.inputValue = '';
      return _state;
    },
    deleteItem(state, action) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.list.splice(action.index, 1);
      return _state;
    }
  },

};
