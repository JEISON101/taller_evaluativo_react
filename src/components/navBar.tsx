import { useNavigate } from "react-router-dom"

export const NavBar:React.FC = () => {
    const navigate = useNavigate()
    return (
        <nav className="bg-gray-800 text-white px-4 py-3">
            <p className="text-xl hover:bg-gray-700 px-3 py-2 rounded transition cursor-pointer" onClick={()=>{navigate('/')}}>LIBRERIA ADONIS-REACT</p>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="space-x-4">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded transition cursor-pointer" onClick={()=>{navigate('/editoriales')}}>Editoriales</a>
                    <a className="hover:bg-gray-600 px-3 py-2 rounded transition cursor-pointer" onClick={()=>{navigate('/libros')}}>Libros</a>
                </div>
            </div>
        </nav>
    )
}