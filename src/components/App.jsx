// import { Route, Routes } from "react-router-dom";
// import React from 'react';
// import { HomePage } from "pages/HomePage/HomePage";
// import { MoviesPage } from "pages/MoviesPage/MoviesPage";
// import { Layout } from "./Layaout/Layout";
// import { ErrorPage } from "pages/ErrorPage/ErrorPage";
// import { MovieDetails } from "pages/MovieDetails/MovieDetails";
// import { Cast } from "./Cast/Cast";
// import { Review } from "./Review/Review";



// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//         <Route index element={<HomePage/>}/>
//         <Route path="movies" element={<MoviesPage/>}/>
//         <Route path="/movies/:movieId" element={<MovieDetails/>}>
//           <Route path="cast" element={<Cast/>} />
//           <Route path="review" element={<Review/>} />
//         </Route>
//       </Route>
//       <Route path="*" element={<ErrorPage/>}/>
//     </Routes>
//   );
// };


import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const Layout = lazy(() => import('./Layaout/Layout'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </Suspense>
  );
};



