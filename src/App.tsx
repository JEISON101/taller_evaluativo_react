import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/navBar'
import { Home } from './components/home'
import { Libros } from './pages/Libros'
import { Editoriales } from './pages/Editoriales'
import { useEffect, useState } from 'react'
import { LibrosEditorial } from './pages/LibrosEditorial'

interface Editorial{
  nombre: string; 
  pais: string
}

function App() {
   const [editoriales, setEditoriales] = useState<Editorial[]>([]);
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
      }, [editoriales]);

  return (
    <>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/libros' element={<Libros editoriales={editoriales}/>}/>
            <Route path='/editoriales' element={<Editoriales editoriales={editoriales} setEditoriales={setEditoriales}/>}/>
            <Route path='/libros/editorial/:id' element={<LibrosEditorial/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
