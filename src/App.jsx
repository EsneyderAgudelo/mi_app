import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">Header</header>
      <div className="main-content">
        <aside className="sidebar">Sidebar</aside>
        <section className="content">
          <div className="medium-box">Box 1</div>
          <div className="small-boxes">
            <div className="medium-box">Box 2</div>
            <div className="medium-box">Box 3</div>
          </div>
          <div className="small-boxes">
            <div className="small-box">Box 4</div>
            <div className="small-box">Box 5</div>
            <div className="small-box">Box 6</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
