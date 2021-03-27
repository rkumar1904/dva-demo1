import dva from 'dva';
import App from './App';
// step1
const app = dva();
// step 2
app.model(require('./models/product').default);
app.model(require('./models/cart').default);
// step 3 
app.router(() => <App />);
// step 4
app.start("#root");
