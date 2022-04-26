import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

interface Props {
  onChange: ChangeEventHandler;
  text: string;
  value: string;
  type: HTMLInputTypeAttribute;
}
const Input: React.FC<Props> = ({ onChange, text, value, type }) => {
  return (
    <>
      <label>{text}</label>
      <input type={type} onChange={onChange} value={value} />
    </>
  );
};

export default Input;
