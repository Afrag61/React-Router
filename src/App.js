import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/Products' element={<ProductsPage />} />
//   </Route>
// )

// const router = createBrowserRouter(routerDefinition)

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "Products", element: <ProductsPage /> },
      { path: "Products/:productId", element: <ProductDetailsPage /> },
    ],
    errorElement: <ErrorPage />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
