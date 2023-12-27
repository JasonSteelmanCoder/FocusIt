import React from 'react';
import './css/App.css';
import { createRoutesFromElements, RouterProvider, Route, createBrowserRouter } from 'react-router-dom';
import Root from './components/root.js';
import SearchPage from './pages/SearchPage.js';
import ListsPage from './pages/ListsPage.js';
import ReadingPage from './pages/ReadingPage.js';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route index element={<SearchPage />} />
    <Route path='lists' element={<ListsPage />} />
    <Route path='reading' element={<ReadingPage />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
