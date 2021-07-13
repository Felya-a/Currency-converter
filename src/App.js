import logo from './logo.svg';
import './App.scss';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import { initAppTC } from './redux/initializeReducer';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.initAppTC();
  })
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default connect(null, {initAppTC})(App);
