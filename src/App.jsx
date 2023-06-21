import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage"
import SuccessPage from "./components/SuccessPage"
import ErrorPage from "./components/ErrorPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  )
}

export default App