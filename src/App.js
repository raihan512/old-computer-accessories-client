import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Routes/Router/Router';

function App() {
  return (
    <div className="">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
