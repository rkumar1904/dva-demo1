const cart = {
  namespace: "cart",
  state: {
    cartCount: 0,
  },

  effects: {
    *setState({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: {
          payload
        },
      });
    },
    *getCartCount({ payload }, { put, call }) {
      const response = yield call('name of api', payload);
      if (response.success == true) {
        yield put({
          type: 'save',
          payload: {
            cartCount: response.data,
          },
        });
      }
    }
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
}

export default cart;