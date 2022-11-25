import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import Login from "./pages/Login";
import Error from "./pages/Error";

import { ScrollToTop } from './components/scroll-to-top'

import "./App.css";



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <div className="text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/posts/new" element={<PostFormPage />} />
            <Route path="/posts/:id" element={<ShowPostPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/404" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PostsListPage />} />
          </Routes>
        </div>
      </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}



export default App;
