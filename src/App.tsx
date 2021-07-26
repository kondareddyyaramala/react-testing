import React, { useCallback, useRef, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import UserTable from './components/UserTable';

function App() {
  const [title, setTitle] = useState("User Details Section");
  const inputRef = useRef<HTMLInputElement>(null);
  const URL = 'https://randomuser.me/api/?results=20';

  const updateTitle = () => {
    const { value } = inputRef.current as HTMLInputElement;
    setTitle(value);
  };

  return (
    <div className="App">
       <Header title={title} subTitle="User can edit user and it's subcidery information"></Header>
       <div className="Contents">
         <div>Test One</div>
         <div>Test Two</div>
         <div>Test Three</div>
       </div>
       <input className="TitleInput" ref={inputRef} />
       <button className="Button" onClick={updateTitle}>Update Title</button>
       <UserTable url={URL}></UserTable>
    </div>
  );
}

export default App;
