import { useEffect, useState } from "react";

export const FormularioEditorial: React.FC<{ setForm: (value: boolean) => void; id: number | undefined }> = ({ setForm, id }) => {
    const [nombre, setNombre] = useState<string>("");
    const [pais, setPais] = useState<string>("");

    const obtenerEditorial = async () => {
        if (id !== undefined) {
            const res = await fetch(`http://localhost:3333/editorial/${id}`);
            const data = await res.json();
            setNombre(data.editorial[0].nombre);
            setPais(data.editorial[0].pais);
        }
    }

    useEffect(() => {
        obtenerEditorial();
    },[id]);

    const manejarSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const metodo = id === undefined ? "POST" : "PUT";
        const url = id === undefined
            ? "http://localhost:3333/editorial"
            : `http://localhost:3333/editorial/${id}`;
        await fetch(url, {
            method: metodo,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, pais })
        });
        setForm(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    {id === undefined ? "Agregar Editorial" : "Editar Editorial"}
                </h2>
                <form onSubmit={manejarSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre de la Editorial
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="pais" className="block text-sm font-medium text-gray-700 mb-1">
                            País
                        </label>
                        <input
                            type="text"
                            id="pais"
                            value={pais}
                            onChange={(e) => setPais(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-md bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition m-1"
                        >
                            {id === undefined ? "Agregar" : "Editar"}
                        </button>

                        <button
                            type="button"
                            className="w-md bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition m-1"
                            onClick={() => setForm(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
