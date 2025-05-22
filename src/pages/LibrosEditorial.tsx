import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
interface LibroEditorial {
    id_editorial:number;
    nombre: string;
    titulo: string;
}

export const LibrosEditorial: React.FC = () => {
    const [librosEditorial, setLibrosEditorial] = useState<LibroEditorial[]>([])
    const params = useParams()

    const findLibros = async () => {
        const response = await fetch(`http://localhost:3333/editorial/${params.id}/libros`);
        const data = await response.json();
        setLibrosEditorial(data.libros);
    }

    useEffect(() => {
        findLibros()
    }, [])

    return (
        <div className="w-full flex items-center justify-center">
            <div className="">
                <div className="w-2xl mb-6 bg-gray-800 m-6 p-2 rounded-xl">
                    <h2 className="text-2xl font-bold text-white">Lista de libros</h2>
                </div>
                {librosEditorial.length > 0 ?
                    (librosEditorial.map((libro, index) => (
                        <ul key={index}>
                            {libro.titulo + " --- " + libro.nombre}
                        </ul>
                    ))) : (
                        <p className="px-6 py-4 text-center text-gray-800 text-lg">
                            La editorial no tiene libros
                        </p>
                    )}
            </div>
        </div>
    )
}