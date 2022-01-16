import React, { useState } from 'react';
import { render } from 'react-dom';

const EncodeBase64 = () => {
const [selectedFile, setSelectedFile] = useState([]);
const [fileBase64String, setFileBase64String] = useState("")

const onFileChange = (e) => {
    setSelectedFile(e.target.files);
    console.log(e.target.files)
    // console.log(e.target.files[0]);
    // console.log(e.target.files[0].name);
    // console.log(e.target.files[0].size);
    // console.log(e.target.files[0].type);
};

const encodeFileBase64 = (file) => {
    const reader = new FileReader();
    if(file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
            const Base64 = reader.result
            console.log(Base64)
            setFileBase64String(Base64)
        };
        reader.onerror = (error) => {
            console.log('error', error)
        }
    }
};
    encodeFileBase64(selectedFile[0])

  return (
    <div>
        <input type='file' id='input' onChange={onFileChange} />
    </div>
);
};

export default EncodeBase64;