import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert';

const options = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'French', value: 'fr' },
  { label: 'Korean', value: 'ko' },
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Text</label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <Dropdown
            label='Select a Language'
            options={options}
            selected={language}
            onSelectedChange={setLanguage}
          />
          <hr/>
          <h3 className='ui header'>Output</h3>
          <Convert text={text} language={language} />
        </div>
      </div>
    </div>
  )
}

export default Translate
