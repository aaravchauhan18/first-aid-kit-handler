import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Add from './components/addmedicine/Add';
import Edit from './components/updatemedicine/Edit';
import Medicine from './components/getmedicine/Medicine';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Medicine />
          <Footer />
        </div>
      ),
    },
    {
      path: '/add',
      element: (
        <div>
          <Add />
          <Footer />
        </div>
      ),
    },
    {
      path: '/edit/:id',
      element: (
        <div>
          <Edit />
          <Footer />
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
