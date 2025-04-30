import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GameContainer } from './components/GameContainer/GameContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GameContainer />
      </div>
      ;
    </Provider>
  );
}

export default App;
