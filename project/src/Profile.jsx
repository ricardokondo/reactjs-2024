import React from 'react';
import './App.css';
import MyButton from './MyButton';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 100,
};

let content;
const isLoggedIn = true;

if (isLoggedIn) {
    content = <MyButton/>;
} else {
  content = <p>Não entrou!</p>;
}

export default function Profile() {
  return (
      <>
          <hr />
    
            {content}
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
