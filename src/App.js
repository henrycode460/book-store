import React from 'react';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Categories from './Components/Categories';
import { Home } from './Components/Home';
import { Provider } from 'react-redux';
import store from '../src/redux/configureStore';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}> 
      <>
        <Header />
        <div className="container">

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/Catogeries" element={<Categories />} />
            
          </Routes>

        </div>

      </>
      </Provider>
    );
  }
}

export default App;