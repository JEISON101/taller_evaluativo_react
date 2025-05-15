import { useNavigate } from "react-router-dom"

export const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <section className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a la Biblioteca Virtual</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Explora una amplia colección de libros y conoce nuestras editoriales destacadas.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-600 transition cursor-pointer"
                    onClick={()=>{navigate('/libros')}}>
                        Ver Libros
                    </a>
                    <a className="bg-white border border-gray-700 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition cursor-pointer"
                    onClick={()=>{navigate('/editoriales')}}>
                        Ver Editoriales
                    </a>
                </div>
            </div>
        </section>
    )
}