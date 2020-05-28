// Booklist.jsx
import React, { useState, useEffect } from 'react';
import Linkify from 'react-linkify';

const Booklist = props => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props.getData?.(props.language).then(response => setBookData(response));
  }, [props])
  return (
    <div>
      <ul>
        {     // このあたり編集
          bookData === null
            ? <p>now loading...</p>
            : bookData.data.items.map((x, index) => <li key={index}>
             {x.volumeInfo.title}<br></br>
            {
          bookData === null
                ? <p></p>
                : x.volumeInfo.webReaderLink
            }
            {
            x.volumeInfo.imageLinks === undefined
                ? <p></p>
                : <img src={x.volumeInfo.imageLinks.thumbnail} alt={"thumbnail"}/>
            }
    
            </li>)
        }
      </ul>
    </div>
  );
}
export default Booklist;