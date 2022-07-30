import React from 'react';
import Create from './Components/Create';
import Post from './Components/Post';
import Update from './Components/Update';
import Delete from './Components/Delete';


function App() {
  return (
    <div className="App">
      <header className="App-header">

      <h1>
        TASK-1
        </h1>
        <p>
          React CRUD using AXIOS.
        </p>
        <button onClick={Create}>GET</button>
        <button onClick={Post}>POST</button>
        <button onClick={Delete} >DELETE</button>
        <button onClick={Update}>PATCH</button>
        <footer>Check for Output in Developer Console</footer>
      </header>
     
    </div>
  );
}

export default App;
