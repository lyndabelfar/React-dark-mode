import { useEffect, useState } from "react";


function App() {
  const [isDark, setIsDark] = useState(false)
  function handleButtonClick(){
    setIsDark(!isDark)
  }
  useEffect(()=>{
    document.body.classList.toggle('dark')
  },[isDark])
  return (
    <div className="container">
      <div className="container-top">
        <h2 className={isDark?'dark':''}>Overreacted</h2>
        <button className={isDark?'dark':''} onClick={handleButtonClick}>{isDark?'light mode':'dark mode'}</button>
      </div>
      <div className="articles">
        <div className="article-1">
          <h1 className={isDark?'dark':''}>The WET Codebase</h1>
          <b className={isDark?'dark':''}>Sunday 4th, 202011 min read</b>
          <div className={isDark?'detail dark':'detail'}>Come waste your time with me</div>
        </div>
        <div className="article-2">
          <h1 className={isDark?'dark':''}>Goodby, Clean Code</h1>
          <b className={isDark?'dark':''}>Friday 22nd, 20195 min read</b>
          <div className={isDark?'detail dark':'detail'}>Let clean code guide you. Then let it go.</div>
        </div>
        <div className="article-3">
          <h1 className={isDark?'dark':''}>My Decade In Review</h1>
          <b className={isDark?'dark':''}>Saturday 11th, 20185 min read</b>
          <div className={isDark?'detail dark':'detail'}>A personal reflection.</div>
        </div>
        <div className="article-4">
          <h1 className={isDark?'dark':''}>What Are The React Team Principles</h1>
          <b className={isDark?'dark':''}>Thursday 4th, 20155 min read</b>
          <div className={isDark?'detail dark':'detail'}>UI Before API.</div>
        </div>
      </div>

    </div>
  );
}

export default App;
