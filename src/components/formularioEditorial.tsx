import { useState } from "react";

export const FormularioEditorial: React.FC<{ setForm: (value: boolean) => void }> = ({ setForm }) => {
    const [nombre, setNombre] = useState<string>("");
    const [pais, setPais] = useState<string>("");

    const guardarEditorial = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch("http://localhost:3333/editorial", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ nombre, pais })
        });
        setForm(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Agregar Editorial</h2>
                <form onSubmit={guardarEditorial}>
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
                            Guardar
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
