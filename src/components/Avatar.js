import React from 'react';

// This is a function, that is why I have to create a varible BEFORE the return statement.
// In this varible, I'll calculate the link to the avatar image.
const Avatar = (props) => {
  const imgID = `avatars/${props.people.id}.png`;
  const name = props.people.name;

  return (
    <div className={`chat__avatar ${props.selectedOne === name ? 'selected' : ''}`} onClick={props.clickFnd}>
      <img src={imgID} alt='Avatar' />
      <p>{name}</p>
    </div>
  );
}

export default Avatar;