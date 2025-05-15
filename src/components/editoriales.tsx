import { useState } from "react";
import { FormularioEditorial } from "./formularioEditorial";

export const Editoriales: React.FC<{editoriales:any[], setEditoriales:any}> = ({editoriales}) => {
    const [form, setForm] = useState(false);

    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Listado de Editoriales</h2>
                    <button
                        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer"
                        onClick={() => setForm(true)}
                    >
                        Añadir Editorial
                    </button>
                </div>

                <div className="overflow-x-auto bg-white shadow rounded-lg">
                    <table className="min-w-full text-left text-sm text-gray-800">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-6 py-3 font-medium uppercase">Nombre</th>
                                <th className="px-6 py-3 font-medium uppercase">País</th>
                                <th className="px-6 py-3 font-medium uppercase">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {editoriales.length > 0 ? (
                                editoriales.map((editorial, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100">
                                        <td className="px-6 py-4">{editorial.nombre}</td>
                                        <td className="px-6 py-4">{editorial.pais}</td>
                                        <td className="px-6 py-4 space-x-2">
                                            <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer">
                                                Editar
                                            </button>
                                            <button className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer">
                                                Eliminar
                                            </button>
                                            <button className="bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-md cursor-pointer">
                                                Ver libros
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

            {form && <FormularioEditorial setForm={setForm} />}
        </>
    );
};
