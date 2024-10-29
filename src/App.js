import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/Main/Main'
import AboutPage from './pages/About/About';
import PopupPage from './pages/Popup/Popup';
import PhotosPage from './pages/Photos/Photos';

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/popup",
    element: <PopupPage />,
  },
  {
    path: "/photos",
    element: <PhotosPage />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
