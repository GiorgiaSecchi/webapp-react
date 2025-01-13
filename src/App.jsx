import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import DefaultLayout from "./layouts/DefaultLayout";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieIndexPage from "./pages/movies/MovieIndexPage";
import MovieShowPage from "./pages/movies/MovieShowPage";

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
            <Route index Component={MovieIndexPage} />
            <Route path=":id" Component={MovieShowPage} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
