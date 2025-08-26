import './App.css';
import Input from './assets/components/Input/Input';
import { AppProvider } from './assets/Contex/Contex';
import Output from './assets/components/Output/Output';

function App() {
  return (
    <AppProvider>
      <Input />
      <Output />
    </AppProvider>
  );
}

export default App;
