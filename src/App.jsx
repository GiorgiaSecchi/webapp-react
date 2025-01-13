import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import DefaultLayout from "./layouts/DefaultLayout";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import MoviesIndexPage from "./pages/movies/MoviesIndexPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={DefaultLayout}>
          {/* Institutional pages */}
          <Route index Component={HomePage} />
          <Route path="about" Component={AboutPage} />
          <Route path="*" Component={NotFoundPage} />

          {/* Movies pages */}
          <Route path="movies">
            <Route index Component={MoviesIndexPage} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
