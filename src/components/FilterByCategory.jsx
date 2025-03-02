import { useContext } from "react";
import { BudgetDispatchContext } from "../context/BudgetContext";  // Asegúrate de importar el contexto
import { categories } from "../data/categories";

export const FilterByCategory = () => {
  const dispatch = useContext(BudgetDispatchContext);  // Leer dispatch desde el contexto

  // Manejador de evento para el cambio en el select
  const handleChange = (e) => {
    dispatch({ type: "add-filter-category", payload: { categoryId: e.target.value } });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category">Filtrar gastos</label>
          <select 
            id="category" 
            className="bg-slate-100 p-3 flex-1 rounded" 
            onChange={handleChange}  // Asignar el manejador de evento
          >
            <option value="">--- Todas las categorías ---</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
