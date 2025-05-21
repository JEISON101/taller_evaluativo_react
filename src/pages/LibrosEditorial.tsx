import { useEffect, useState } from "react"
interface LibroEditorial {
    id_editorial:number;
    nombre: string;
    titulo: string;
}

export const LibrosEditorial: React.FC = () => {
    const [librosEditorial, setLibrosEditorial] = useState<LibroEditorial[]>([])

    const findLibros = async () => {
        const response = await fetch(`http://localhost:5173/libros/editorial/:id/libros`);
        const data = await response.json();
        setLibrosEditorial(data);
    }

    useEffect(() => {
        findLibros()
    }, [librosEditorial])

    return (
        <div className="w-full flex items-center justify-center">
            <div className="">
                <div className="w-2xl mb-6 bg-gray-800 m-6 p-2 rounded-xl">
                    <h2 className="text-2xl font-bold text-white">Lista de libros</h2>
                </div>
                {librosEditorial.length > 0 ?
                    (librosEditorial.map((libro) => (
                        <ul>
                            <li>{libro.titulo}</li>
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