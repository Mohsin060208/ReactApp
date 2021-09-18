import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const users = [
    { name: 'Robin', isDeveloper: true },
    { name: 'Markus', isDeveloper: false },
    { name: 'Rehman', isDeveloper: true },
    { name: 'Zain', isDeveloper: false },
    { name: 'Athar', isDeveloper: false },
    { name: 'Mohsin', isDeveloper: true },
    { name: 'Abdullah', isDeveloper: true },
  ];

  const [searchTerm, setQuery] = React.useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };
  function filterUser(user) {
    return searchTerm.split(' ').some(s => user.name.toLowerCase().includes(s.toLowerCase()));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container-fluid">
          <div className="row">
            <div className="offset-8 col-4">
              <input type="text" placeholder="Search" onChange={handleChange} />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-4">
              <p>Total Users</p>
              {
                users.filter(filterUser).map(user => <div>{user.name}</div>)
              }
            </div>
            <div className="col-4">
              <p>Developers</p>
              {
                users.filter(user => user.isDeveloper && filterUser(user))
                  .map(user => <div>{user.name}</div>)
              }
            </div>
            <div className="col-4">
              <p>Non Developers</p>
              {

                users.filter(user => !user.isDeveloper && filterUser(user))
                  .map(user => <div>{user.name}</div>)
              }
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
