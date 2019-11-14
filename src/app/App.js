import React from 'react';
import '../scss/App.scss';


import Header from './components/Header';
import Footer from './components/Footer';  


const App = ({children}) => (
    <div className="App">
      <Header />
      {children}
      <Footer /> 
    </div>
)

export default App;
