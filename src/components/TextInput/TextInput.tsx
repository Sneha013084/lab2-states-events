import React ,{ useState}from 'react';
import { type TextInputProps } from '../../types';


export const TextInput: React.FC <TextInputProps> = ({
    onTextChange,
    placeholder= 'Enter a text..',
    initialValue= '',
  })  => {
    const [text,setText] = useState( initialValue);

     const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedText = e.target.value;
    setText(updatedText);
    onTextChange(updatedText);
    
 };
     
  return (
    <textarea 
    style = {{ width : "100%", padding: "8px",   border: '1px solid #ccc',}}
    rows = {6}
    value ={text}
    onChange ={handleChange}
    placeholder={placeholder}

    />
  );
};

