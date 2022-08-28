import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <div>
        <h2>ERROR 404</h2>
        <h3>Page Not Found</h3>
      </div>
      <Link to="/countries">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
