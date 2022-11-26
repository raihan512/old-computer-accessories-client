import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <RouterProvider router={Router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
