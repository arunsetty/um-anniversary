import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const App = () => {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
