import React, { useRef, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';

function App() {
  const [inputText, setInputText] = useState('');
  const [prediction, setPrediction] = useState(null);
  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // Reset height to auto to correctly calculate new height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to match the content
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    adjustTextareaHeight();
  };



  const handleSubmit = () => {
    axios.post('http://localhost:5000/predict', { text: inputText }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => {
        setPrediction(response.data.result === 1 ? 'Spam' : 'Not Spam');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center bg-black text-white gap-5'>
      <div className='flex flex-col justify-center items-center gap-5 bg-gray-800 p-4 rounded-md'>
      <h1 className='font-semibold text-2xl'>Email/SMS Spam Classifier</h1>

      <textarea 
      ref={textareaRef}
      className='h-auto w-full rounded-lg text-black px-2 py-2'
      value={inputText} 
      onChange={handleInputChange} 
      />
      <div className='flex gap-4'>
        <button 
        className='bg-gray-500 font-semibold text-xl px-2 py-2 rounded-md'
        onClick={handleSubmit}>
          Predict
        </button>
        {prediction && <h2 className={classNames(`font-semibold text-xl px-2 py-2 rounded-md`,
        {
          'bg-red-500': prediction === 'Spam',
          'bg-green-500': prediction === 'Not Spam',
        })}
        >
          {prediction}
        </h2>}
      </div>
      
      </div>
    </div>
  );
}

export default App;
