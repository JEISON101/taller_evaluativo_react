import { useNavigate } from "react-router-dom"

export const NavBar:React.FC = () => {
    const navigate = useNavigate()
    return (
        <nav className="bg-gray-800 text-white px-4 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
            <p className="text-2xl hover:bg-gray-200 hover:text-gray-800 px-3 py-2 rounded transition cursor-pointer" onClick={()=>{navigate('/')}}><b>LIBRERIA ADONIS-REACT</b></p>
                <div className="space-x-4">
                    <a className="hover:bg-gray-600 px-3 py-2 rounded transition cursor-pointer text-lg" onClick={()=>{navigate('/editoriales')}}>Editoriales</a>
                    <a className="hover:bg-gray-600 px-3 py-2 rounded transition cursor-pointer text-lg" onClick={()=>{navigate('/libros')}}>Libros</a>
                </div>
            </div>
        </nav>
    )
}