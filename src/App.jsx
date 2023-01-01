import './App.css';
import { useState } from 'react';
import Footer from './component/Footer';
import Form from './component/Form';
import Header from './component/Header';
import ListItems from './component/ListItems';
import ViewData from './component/ViewData';

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
      />
      {/* <ListItems
        todo={todo}
        setTodo={setTodo}
      /> */}
      <ViewData />
      <Footer />
    </div>
  );
}

export default App;