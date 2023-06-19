import React, { StrictMode, useReducer, Suspense } from 'react';

import Navs from "./components/Navigation";
import Content from "./components/Content";
import Nebula from "./components/Nebula";
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import NewsList from './components/SideBar/news';
import './App.css'



function App() {
  const reducer = (state, action) => {
    return { ...action }
  }

  const Loading = () => {
    return <h1 className='position-absolute border'>Loading....</h1>
  }

  const [state, dispatch] = useReducer(reducer, { type: "start", isShow: false })




  return (
    <div className='App-Container' id="About">
      <StrictMode>
        <Navs />
        <Nebula />
        <Content isShow={state.isShow} showAll={() => dispatch({ type: "start", isShow: true })} />
        {
          state.isShow ?
            <SideBar /> : <NewsList /> 
        }
      </StrictMode>
      {
        state.isShow ?
          <Suspense fallback={<Loading />}>
            <Footer isShow={state.isShow} />
          </Suspense> : ""
      }



    </div>

  );
}

export default App;