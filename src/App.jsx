import './App.css';
import Input from './assets/components/Input/Input';
import { useState } from 'react';
import { ContextProvider } from './assets/Contex/Contex';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <ContextProvider value={{ notes, setNotes }}>
      <Input />
    </ContextProvider>
  );
}

export default App;
