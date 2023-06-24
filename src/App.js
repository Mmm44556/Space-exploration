import React, { StrictMode, useReducer, Suspense, useState, useEffect } from 'react';

import Navs from "./components/Navigation";
import Content from "./components/Content";
import Nebula from "./components/Nebula";
import Footer from './components/Footer';
import NewsList from './components/SideBar/news';
import './App.css'
const BComponent = React.lazy(() => import("./components/SideBar"))



function App() {
  const reducer = (state, action) => {
    return { ...action }
  }

  const Loading = () => {
    return <h1 className='position-absolute end-0 bottom-0'>Loading....</h1>
  }

  const [state, dispatch] = useReducer(reducer, { type: "start", isShow: false })
  const [lazyTime, setLazyTime] = useState(false);
  useEffect(() => {
    if (state.isShow) {
      let id = setTimeout(() => {
        setLazyTime(true)
      }, 7500)

      return () => {
        clearTimeout(id)
      }
    }
  }, [state])


  return (
    <div className='App-Container' id="About">
      <StrictMode>
        <Navs />
        <Nebula />
        <Content isShow={state.isShow} showAll={() => dispatch({ type: "start", isShow: true })} />
        {
          state.isShow ?
            lazyTime ? <Suspense fallback={<Loading />}>
              <BComponent /></Suspense> : "" : <NewsList />
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