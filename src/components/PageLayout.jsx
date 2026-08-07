import React from "react";
import Navbar from "./Navbar";

function PageLayout({ title, subtitle, children }) {
  return (
    <div className="dashboard">
      <Navbar />

      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default PageLayout;