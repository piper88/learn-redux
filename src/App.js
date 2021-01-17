import './App.css';
import { useSelector, useDispatch} from 'react-redux';
//import actions
import { increment, decrement } from './actions/index';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.loggedIn);

  const dispatch = useDispatch();
  return (
    <div className="App">
    <button onClick={() => dispatch(increment())}></button>
    <button onClick={() => dispatch(decrement())}></button>
    Counter: {counter}
    {isLogged ? <h3>Private info</h3> : null}
    </div>
  );
}



export default App;
