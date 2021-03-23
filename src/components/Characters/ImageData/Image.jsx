import React from 'react'

export const CharacterImage = ({ onClick, path }) => {
  return (
    <div onClick={onClick}>
      <img src={path} alt="キャラクターの画像" />
    </div>
  );
};