import React from 'react';
import { useState } from 'react';

const emojiLib = [
  {name: "rocket", icon: '🚀'},
  {name: "smiley", icon: '🚀'}
];


export default function Emoji(props){

  // const [icon, setIcon] = useState('');

  // const { icon } = emojiLib.find(item => item.name === props.name);

  return (
    <span>
      {emojiLib.find(item => item.name === props.name).icon}
    </span>
  )
}

