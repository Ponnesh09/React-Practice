import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";

const App = () => {
  // 1. Define routes using an array of objects
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />, // The parent layout wrapper

      children: [
        {
          index: true, //Matches "/" exactly
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "profile/:username", // Dynamic route matching "/profile/any-name"
          element: <Profile />,
        },
      ],
    },
  ]);
  // Dynamic route matching "/profile/any-name"
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
};

export default App;
