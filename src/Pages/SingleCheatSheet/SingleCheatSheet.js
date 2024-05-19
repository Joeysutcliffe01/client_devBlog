import React, { useEffect, useState } from 'react';

import data from '../../Data/JavaScript/cheatSheetJs.json';
import SyntaxHighlighter from 'react-syntax-highlighter';

import blob from "../../Assets/Blobs/blob_4.svg"
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

import { FaCopy } from "react-icons/fa";
import { LuCopyCheck } from "react-icons/lu";

export const SingleCheatSheet = () => {

  const [copyText, setCopyText] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Copied to clipboard:', text);

        setCopyText(true)

        if (copyText !== true) {
          setTimeout(() => {
            setCopyText(null);
          }, 3000);
        }
        // You can add additional feedback here if needed
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
        // You can handle errors here if needed
      });
  };

  return (
    <div className='cheat_sheet_main'>
      {Object.entries(data).map(([category, examples]) => (
        <div key={category} className='cheat_sheet_containe'>
          <img className='cheat_sheet_category_blob' src={blob} alt="blob" />
          <h4 className='cheat_sheet_category'>{category}</h4>
          {examples.map((example, index) => (
            <div 
            key={index} 
            className="code-example"
            >
              <SyntaxHighlighter
                language="javascript"
                style={docco}
                onClick={() => copyToClipboard(example.example)}
                className="code-example-text"
              >
                {example.example}
              </SyntaxHighlighter>
              {!copyText ? (
                <button className="code-example-copy-button" onClick={() => copyToClipboard(example.example)}>
                <FaCopy />
                </button>
              ) : 
                <button className="code-example-copy-button" style={{color:"green"}} onClick={() => copyToClipboard(example.example)}>
                  <LuCopyCheck />
                  </button>
                }
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

