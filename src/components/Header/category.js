import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Category = React.forwardRef(({ class1 = '', class2 = '' }, ref) => (
  <div ref={ref}>
    <div className={class1}>
      <li><Link id="men" className="categories" to="/">HOMMES</Link></li>
      <div className={class2}>
        <Link to="/">T-shirts</Link>
        <Link to="/">Chemises</Link>
        <Link to="/">Pulls & Sweats</Link>
        <Link to="/">Manteaux & Vestes</Link>
        <Link to="/">Pantalons</Link>
        <Link to="/">Jeans</Link>
        <Link to="/">Costumes</Link>
      </div>
    </div>
    <div className={class1}>
      <li><Link id="women" className="categories" to="/">FEMMES</Link></li>
      <div className={class2}>
        <Link to="/">T-shirts</Link>
        <Link to="/">Chemisiers</Link>
        <Link to="/">Pulls & Sweats</Link>
        <Link to="/">Manteaux & Vestes</Link>
        <Link to="/">Jeans</Link>
        <Link to="/">Pantalons</Link>
        <Link to="/">Jupes</Link>
        <Link to="/">Robes</Link>
      </div>
    </div>
    <div className={class1}>
      <li><Link id="trend" className="categories" to="/">TENDANCES</Link></li>
      <li><Link id="challenges" className="categories" to="/">DEFIS</Link></li>
    </div>
  </div>
));

Category.propTypes = {
  class1: PropTypes.string.isRequired,
  class2: PropTypes.string.isRequired,
};

export default Category;
