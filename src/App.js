import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Layout from "./layouts/Layout";
import Page404 from "./pages/Page404";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/form" element={<Form />} />

            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
