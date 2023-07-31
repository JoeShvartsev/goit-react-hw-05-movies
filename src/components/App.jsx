import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { Layout } from "./Layaout/Layout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Review } from "./Review/Review";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<MoviesPage/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="review" element={<Review/>} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
};
