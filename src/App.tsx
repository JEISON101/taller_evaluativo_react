import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/navBar'
import { Home } from './components/home'
import { Libros } from './components/Libros'
import { Editoriales } from './components/editoriales'
import { useEffect, useState } from 'react'

function App() {
   const [editoriales, setEditoriales] = useState<{ nombre: string; pais: string }[]>([]);
      const getEditoriales = async () => {
          await fetch("http://localhost:3333/editoriales")
              .then(response => response.json())
              .then(data => {
                  setEditoriales(data.datos);
              })
              .catch(error => {
                  console.error("Error al obtener los datos:", error);
              });
      };
  
      useEffect(() => {
          getEditoriales();
      }, []);

  return (
    <>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/libros' element={<Libros editoriales={editoriales}/>}/>
            <Route path='/editoriales' element={<Editoriales editoriales={editoriales} setEditoriales={setEditoriales}/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
