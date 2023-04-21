import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home';

import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/Errorpage';
import JobDetails from './components/JobDetails/JobDetails';
import {getjobdata } from './components/getjobdata';
import JobCategory from './components/JobCategory/JobCategory';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('/job.json'),

      },
      {
        path: "/",
        element: <JobCategory />,
    
      },
      {
        path: "/:Id",
        element: <JobDetails />,
        loader: ({params})=>fetch("/job.json"),
      },

      {
        path:"/statistics",
        element: <Statistics />
      },
      {
        path:"/appliedjob",
        element:<AppliedJob />,
        loader: getjobdata ,
      },
      {
        path:"/blog",
        element:<Blog />,
        loader: ()=>fetch('/question.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
