import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import News from "./components/News.jsx";
import Education from "./components/Education.jsx";
import More from "./components/More.jsx";
import "./App.css";
import "./css/All.css";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-layout">
                <div className="left-hero">
                    <Hero />
                </div>
                <div className="right-content">
                    <div style={{ margin: "2rem" }}>
                        <About />
                        <News />
                        <Publications />
                        <Education />
                        <More />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
