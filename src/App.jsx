import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import CodeEditor from './components/CodeEditor'
import CodeReview from './components/CodeReview';

function App() {
  const [theme,setTheme] = useState("");
  const [output,setOutput] = useState("");

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme);
    if(theme) localStorage.setItem('theme',theme);
  },[theme])

  useEffect(()=>{
    const localStorageTheme = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', localStorageTheme);
  },[])


  return (
    <main className='h-screen'>

      <Navbar theme={theme} setTheme={setTheme}/>

      <div className='grid sm:grid-cols-2 grid-cols-1 p-4 h-[90%] gap-4'>
        <CodeEditor setOutput={setOutput}/>
        <CodeReview output={output}/>
      </div>

    </main>
  )
}

export default App
