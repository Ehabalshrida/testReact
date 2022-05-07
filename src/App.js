import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Ref from './components/Ref';
import { ContextProvider } from './components/Context';
import Child from './components/Child';
import Dom1 from "./components/Dom1"
import Dom2 from "./components/Dom2"
import DomH from "./components/DomH"
import List from './components/List';
import Item from './components/Item';
import NavBar from "./components/NavBar"
import Hooks from './components/Hooks';
import Fetch from './components/Fetch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from './components/ContextHook';
import ConsumerContext from './components/ConsumerContext';
import ContextHook from './components/ContextHook';
import UseRef from './components/UseRef';
import UseReducer from './components/UseReducer';
import UseLayouyEffect from './components/UseLayouyEffect';
import UseMemoParent from './components/UseMemoParent';
function App() {

  const state={
    title:"ehab",
    age:30
    
  }
   return (
     <>
     <UseMemoParent/>
     {/* <UseLayouyEffect/> */}
     {/* <UseReducer/> */}
     {/* <UseRef/> */}
     </>
//     <ContextHook>


// <ConsumerContext/>
//     </ContextHook>
 );
 {/* <Hooks name={state.title} age={state.age}/> */}

{/* <Fetch/> */}
  
    //  <BrowserRouter>
    //        <NavBar/>

    //  <Routes>
    //   <Route path="/"exact element={<Dom1/>}/>
    //   <Route path="/f" exact element={<Dom2/>}/>
    //   <Route path="/h" exact element={<DomH/>}/>
    //   <Route path="/l" exact element={<List/>}/>
    //   <Route path="/item/:id" exact element={<Item/>}/>


    //   </Routes>
      
    //   </BrowserRouter>
   
  }

    // <ContextProvider value={state}>
    // <div className="App">
    //   <Child/>
    // {/* <Main/> */}
    // {/* <Ref/> */}
    // </div>
    {/* </ContextProvider> */}
    
    

export default App;
