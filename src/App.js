
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes/routes';

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>

  );
}

export default App;
