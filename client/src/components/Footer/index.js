import React from 'react';
// new-- Link React Router replaces the <a href="/login"> elements, stops page refresh to keep single-page quickness
//import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">&copy;2020 by Lernantino</div>
    </footer>
  );
};

export default Footer;
