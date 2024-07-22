import { categories } from "../data/categoris"

export default function Form() {
  return (
    <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="categori" className="font-bold">Categorias:</label>
            <select 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                id="categori"
            >

                {categories.map((category => (
                    <option 
                        key={category.id}
                        value={category.name}    
                    >
                        {category.name}
                    </option>
                )))}

            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className="font-bold">Categorias:</label>
            <input
                id="activity"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej, comida, jugo de naranja, ensalada, ejercicio, pesas ,bicicleta "
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calorias" className="font-bold">Calorias:</label>
            <input
                id="calorias"
                type="number"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias, Ejemplo 300 o 500"
            />
        </div>

        <input 
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value="Guardar comida o Guardar ejercicio"
            />
    </form>
  )
}
