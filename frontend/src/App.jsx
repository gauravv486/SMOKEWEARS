import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserLayout from './components/Layout/UserLayout';
import AdminLayout from './components/Layout/AdminLayout';
import MenSection from './components/Common/MenSection';
import HomePage from './components/Home/HomePage';
import WomenSection from './components/Common/WomenSection';
import TopWear from './components/Common/TopWear';
import BottomWear from './components/Common/BottomWear';
import CartPage from './components/Cart/CartPage';
import Feed from './components/Common/Feed';
import ProductDetail from './components/Common/ProductDetail';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import SearchFeed from './components/Common/SearchFeed';

function App() {

  const router = createBrowserRouter([

    {
      path: "/signup", element: <Signup />
    },
    {
      path: "/login", element: <Login />
    },

    {
      path: "/",
      element: <UserLayout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "/men", element: <MenSection /> },
        { path: "/women", element: <WomenSection /> },
        { path: "/topwear", element: <TopWear /> },
        { path: "/bottomwear", element: <BottomWear /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/feed", element: <Feed /> },
        { path: "/product/:productId", element: <ProductDetail /> },
        { path: "/search", element: <SearchFeed /> }
      ]
    },

    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "", element: "" }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;
