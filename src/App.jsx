import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/Home";
import Components from "@/pages/Components";
import Test from "@/pages/Test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}/>
      <Route path="/components" element={<Components/>}/>
      <Route path="/components/test" element={<Test/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
