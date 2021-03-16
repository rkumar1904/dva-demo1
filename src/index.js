import dva from 'dva';
import App from './App';

// step1
const app = dva();

// step 2
app.model({
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
      {
        id: 10002,
        name: 'Product 2',
        price: 120,
        qty: 10,
      }
    ],
  },
  effects: {
    *setState({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: payload,
      });
    },
    *getProducts({ payload }, { put, call }) {
      const response = yield call('Name of the api', payload);
      if (response.status === 200) {
        yield put({
          type: 'save',
          payload: {
            productList: response.data,
          }
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
});

// step 3 
app.router(() => <App />);

// step 4
app.start("#root");
