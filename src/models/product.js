import { getPost } from "../services/post";

const product = {
  namespace: 'product',
  state: {
    isLoading: false,
    productList: [
      {
        id: 10001,
        name: 'Product 1',
        price: 100,
        qty: 30,
      },
    ],
    postList: [],
    OnlinePeople: 0,
  },
  // Actions
  effects: {
    *setState({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: payload,
      });
    },
    *getPost({ payload }, { put, call }) {

      const response = yield call(getPost, payload);
      // console.log('response from api', response);
      if (response.status === 200) {
        yield put({
          type: 'save',
          payload: {
            postList: response.data,
          }
        });
      }

    }
  },
  // Reducers
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

export default product;