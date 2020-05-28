// App.jsx
import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// Api.jsx
import axios from 'axios';

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
}

const App = () => {

  const languages = ['React', 'Vue', 'Angular', 'Swift'];
  return (

    <BrowserRouter>

      <div>
        <h1>React appd</h1>

          <p><Link to='/'>React</Link></p>
          <p><Link to='/vue'>Vue</Link></p>
          <p><Link to='/angular'>Angular</Link></p>
          <p><Link to='/swift'>Swift</Link></p>
          </div>
        <hr />
        <Route
          exact
          path='/'
          render={
            props =>
              <Booklist
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}  // getDataという名前で関数を渡す
              />}
        />
        <Route
          path='/vue'
          render={props =>
            <Booklist
              language={languages[1]}
              getData={keyword => getDataFromAPI(keyword)}
            />}
        />
        <Route
          path='/angular'
          render={props =>
            <Booklist
              language={languages[2]}
              getData={keyword => getDataFromAPI(keyword)}
            />}
        />
        <Route
          path='/swift'
          render={props =>
            <Booklist
              language={languages[3]}
              getData={keyword => getDataFromAPI(keyword)}
            />}
        />
      
    </BrowserRouter>
  );
}
export default App;