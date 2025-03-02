import { useContext } from "react";
import { BudgetStateContext } from "../context/BudgetContext";
import { ExpenseDetails } from "./ExpenseDetails";

const ExpenseList = () => {
  const { expenses, currentCategory } = useContext(BudgetStateContext);  // Leyendo expenses y currentCategory desde el contexto
  const isEmpty = expenses.length === 0;

  // Filtrar los gastos si se ha seleccionado una categoría
  const filteredExpenses = currentCategory
    ? expenses.filter((expense) => expense.category === currentCategory)  // Filtrar por categoría
    : expenses;  // Si no se seleccionó categoría, mostrar todos los gastos

  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">No hay gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos</p>
          {filteredExpenses.map((expense, index) => (
            <ExpenseDetails key={index} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;  // Exportación por defecto
