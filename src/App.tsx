import { useState } from 'react';
import './App.css';
import { Input } from './components/Input/Input';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <Input
        label="Password"
        value={value}
        onChange={setValue}
        placeholder={'Введіть дані'}
        type={'password'}
        clearable
      />
    </>
  );
}

export default App;
