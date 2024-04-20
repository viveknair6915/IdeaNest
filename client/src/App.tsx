import { useEffect } from "react";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Subscription from "./components/Subscription/Subscription";
import ErrorPage from "./components/Error/Error";
import Payments from "./components/Payments/Payments";
import Signup from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import Success from "./components/SuccessPage/Succcess";
import UserFeed from "./components/UserFeed/UserFeed";
import Lobby from "./screens/Lobby";
import Room from "./screens/Room";
// import SubscriptionPage from './components/Subscription/SubscriptionPage';

import "./style.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Working from "./components/WorkingOnItPage/Working";
import { InvestorFeed } from "./components/InvestorFeed/InvestorFeed";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    errorElement: <ErrorPage />,

    children: [
      { index: true, Component: Home },
      { path: "/profile", Component: Profile },
      { path: "/subscription", Component: Subscription },
      { path: "/payments", Component: Payments },
      { path: "/signup", Component: Signup },
      { path: "/login", Component: Login },
      { path: "/success", Component: Success },
      { path: "/working", Component: Working },
      { path: "/userFeed", Component: UserFeed },
      { path: "/investorfeed", Component: InvestorFeed },
      { path: "/confrence", Component: Lobby },
      { path: "/Room/:roomId", Component: Room },
    ],
  },

  // { path: "*", Component: Root },
  //as a children agar mai kara contact add ta fer appbar dikahi de raha hai seperately nahi
  {
    // path:"*",
    // element:<Navigate to="/"/>,
  },
]);

function App() {
  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    const redirectionDone = localStorage.getItem("redirectionDone");

    if (!visitedBefore) {
      // If not visited before, set the flag and redirect to signup page
      localStorage.setItem("visitedBefore", "true");
      localStorage.setItem("redirectionDone", "true");
      window.location.href = "/signup"; // Redirect to signup page
    } else if (visitedBefore === "true" && !redirectionDone) {
      // If visited before but redirection not done, set the flag and redirect to root page
      localStorage.setItem("redirectionDone", "true");
      window.location.href = "/";
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
