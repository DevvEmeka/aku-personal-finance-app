import { Navigate, Route, Routes } from "react-router-dom"
import Budgets from "../pages/Budgets"
import Pots from "../pages/Pots"
import Transactions from "../pages/Transactions"
import RecurringBills from "../pages/RecurringBills"
import Layout from "./Layout"
import Home from "../pages/Home"
import "../index.css"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="/budgets" element={<Budgets />}/>
        <Route path="/pots" element={<Pots />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/recurringBills" element={<RecurringBills />} />
        <Route path="*" element={<Navigate to="/"/>}/> 
      </Route>
    </Routes>
  );
}

export default Routing