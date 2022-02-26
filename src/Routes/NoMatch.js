import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
  <div style={{ padding: "1rem", color: "Red"}}>
    <h5>Awww!!! Snap, you are on the wrong path</h5>
    <button>
        <Link to="/invoices">Go back now</Link>
    </button>
  </div>
  )
}

export default NoMatch;
