import { useContext, useEffect } from "react"; 
import { BudgetStateContext } from "./context/BudgetContext";
import BudgetForm from "./components/BudgetForm";
import { BudgetTracker } from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList"; // Importación de ExpenseList
import { FilterByCategory } from "./components/FilterByCategory"; // Importación de FilterByCategory

function App() {
  const state = useContext(BudgetStateContext);
  const isValidBudget = state.budget > 0;
  console.log("budget:", isValidBudget);

  // useEffect para guardar el presupuesto en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString());
  }, [state.budget]);

  // useEffect para guardar los gastos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
  }, [state.expenses]);

  return (
    <>
      <div className="bg-white p-10">
        <header className="bg-blue-600 py-8 max-h-72">
          <h1 className="uppercase text-center font-black text-4xl text-white">
            Planificador de Gastos
          </h1>
        </header>

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-5">
          {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
        </div>

        {isValidBudget && (
          <main className="max-w-3xl mx-auto py-10">
            <FilterByCategory /> {/* Insertamos el filtro aquí */}
            <ExpenseList />
            <ExpenseModal />
          </main>
        )}
      </div>
    </>
  );
}

export default App;
