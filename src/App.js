import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./routes/Home"));
const Events = lazy(() => import("./routes/Events"));
const Countdown = lazy(() => import("./routes/Countdown"));
const Wishes = lazy(() => import("./routes/Wishes"));
const Gallery = lazy(() => import("./routes/Gallery"));

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="content">
        <Suspense fallback={<div className="loader">✨ Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/countdown" element={<Countdown />} />
            <Route path="/wishes" element={<Wishes />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
