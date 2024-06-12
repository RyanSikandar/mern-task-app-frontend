import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import TaskList from "./components/TaskList";
import SignUp from "./components/signUp";
import Login from "./components/Login";
import { Account } from "./components/Account";
import { Status } from "./components/Status";
export const URL = process.env.REACT_APP_URL
function App() {
  return (
    <div className="app">

      <Account>
        <Status />
        <SignUp />
        <Login />
      </Account>

      {/* <div className="task-container">
        <TaskList />
      </div>
      <ToastContainer /> */}
    </div>
  );
}

export default App;
