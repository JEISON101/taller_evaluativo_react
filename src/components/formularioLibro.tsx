import { useEffect, useState } from "react"

export const FormularioLibro: React.FC<{ setFormulario: (value: boolean) => void, editoriales: any[], idL: number | undefined }> = ({ setFormulario, editoriales, idL }) => {
    const [titulo, setTitulo] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [anio_publicacion, setAnioPublicacion] = useState<number>();
    const [editorial_id, setEditorial_id] = useState<number>();

    const obtenerLibro = async () => {
        if (idL !== undefined) {
            const res = await fetch(`http://localhost:3333/libro/${idL}`);
            const data = await res.json();
            setTitulo(data.libro[0].titulo);
            setAutor(data.libro[0].autor);
            setAnioPublicacion(data.libro[0].anio_publicacion);
            setEditorial_id(data.libro[0].editorial_id);
        }
    }

    useEffect(() => {
        obtenerLibro();
    }, [idL]);


    const manejarSubmitLibro = async (e: React.FormEvent) => {
        e.preventDefault();

        const metodo = idL === undefined ? "POST" : "PUT";
        const url = idL === undefined
            ? "http://localhost:3333/libro"
            : `http://localhost:3333/libro/${idL}`;
        await fetch(url, {
            method: metodo,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo, autor, anio_publicacion, editorial_id })
        });
        setFormulario(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {idL === undefined ? "Agregar Libro" : "Editar Libro"}
                </h2>
                <form onSubmit={manejarSubmitLibro}>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Titulo del libro
                        </label>
                        <input
                            type="text"
                            name="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Autor
                        </label>
                        <input
                            type="text"
                            name="autor"
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Año de Publicación
                        </label>
                        <input
                            type="number"
                            name="anio_publicacion"
                            value={anio_publicacion}
                            onChange={(e) => setAnioPublicacion(parseInt(e.target.value))}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Editorial
                        </label>
                        <select
                            name="editorial_id"
                            value={editorial_id}
                            onChange={(e) => setEditorial_id(parseInt(e.target.value))}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Seleccione una editorial</option>
                            {editoriales.length > 0 ? (
                                editoriales.map((edit) => (
                                    <option key={edit.id_editorial} value={edit.id_editorial}>
                                        {edit.nombre}
                                    </option>
                                ))) : (
                                <option>NO HAY EDITORIALES DIPONIBLES</option>
                            )}
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-md bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition m-1"
                        >
                            {idL !== undefined? "Agregar": "Actualizar"}
                        </button>

                        <button
                            className="w-md bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition m-1"
                            onClick={() => { setFormulario(false) }}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}