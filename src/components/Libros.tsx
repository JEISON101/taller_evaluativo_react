import { useEffect, useState } from "react"
import { FormularioLibro } from "./formularioLibro"

type Libro = {
    titulo: string;
    autor: string;
    anio_publicacion: number;
    editorial: string;
}

export const Libros: React.FC<{editoriales:any[]}> = ({editoriales}) => {
    const [formulario, setFormulario] = useState(false)
    const [libros, setLibros] = useState<Libro[]>([])

    const getLibros = () => {
        fetch("http://localhost:3333/libros")
            .then(response => response.json())
            .then(data => {
                setLibros(data.datos.rows)
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }

    useEffect(() => {
        getLibros();
    }, []);



    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Listado de Libros</h2>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer"
                        onClick={() => { setFormulario(true) }}>
                        Añadir Libro
                    </button>
                </div>

                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="min-w-full text-left text-sm text-gray-800">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-3 font-medium uppercase">Titulo</th>
                                <th className="px-6 py-3 font-medium uppercase">Autor</th>
                                <th className="px-6 py-3 font-medium uppercase">Año lanzamiento</th>
                                <th className="px-6 py-3 font-medium uppercase">Editorial</th>
                                <th className="px-6 py-3 font-medium uppercase">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {libros.length > 0 ? (
                                libros.map((libro, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50">
                                        <td className="px-6 py-4">{libro.titulo}</td>
                                        <td className="px-6 py-4">{libro.autor}</td>
                                        <td className="px-6 py-4">{libro.anio_publicacion}</td>
                                        <td className="px-6 py-4">{libro.editorial}</td>
                                        <td className="px-6 py-4 space-x-2">
                                            <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer">
                                                Editar
                                            </button>
                                            <button className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer">
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="px-6 py-4 text-center text-gray-800 text-lg">
                                        No hay datos disponibles
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {formulario && <FormularioLibro setFormulario={setFormulario} editoriales={editoriales} />}
        </div>
    )
}