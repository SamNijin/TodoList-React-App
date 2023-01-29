import "./App.css";
import { useState } from "react";
import Footer from "./component/Footer";
import Form from "./component/Form";
import Header from "./component/Header";
import ListItems from "./component/ListItems";
import ViewData from "./component/ViewData";
import Signup from "./component/Signup";
import Login from "./component/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./component/Home";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      {/* <Header />
      <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} />
      <ViewData />
        <Footer /> */}
      {/* <Signup
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      /> */}
      <Routes>
        <Route path="/TodoList-React-App" element={<Home />} />
        <Route
          path="/TodoList-React-App/add"
          element={
            <div>
              <Header />
              <Form
                input={input}
                setInput={setInput}
                todo={todo}
                setTodo={setTodo}
              />
              <ViewData />
              <Footer />
            </div>
          }
        />

        <Route
          path="/TodoList-React-App/login"
          element={
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              navigate={navigate}
            />
          }
        />
        <Route
          path="/TodoList-React-App/signup"
          element={
            <Signup
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
