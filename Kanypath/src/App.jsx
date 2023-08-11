import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { routes } from "./routes";

function App() {
  return (

    <Router>
    <Layout>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.main />}
          />
        ))}
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
