import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div >
        <h1>welcome</h1>
        <h3>please login</h3>
        <Link to = '/login'>Login</Link>
    </div>
  );
}

export default Home;
