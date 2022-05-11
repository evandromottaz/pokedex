import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

interface Props {
  onChange: ChangeEventHandler;
  text: string;
  value: string;
}
const Input: React.FC<Props> = ({ onChange, text, value }) => {
  return (
    <>
      <label>
        {text}
        <input type="text" onChange={onChange} value={value} />
      </label>
    </>
  );
};

export default Input;
