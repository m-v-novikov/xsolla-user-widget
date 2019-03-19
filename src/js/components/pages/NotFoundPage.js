import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className={"404-page page-content"}>
    <div className="content-container">
      404 - <Link to="/">Go home</Link>
    </div>
  </div>
);

export default NotFoundPage;
