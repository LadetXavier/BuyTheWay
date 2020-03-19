import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// nav of text links to pages 
const Category = React.forwardRef(({ classLinkContainer, classDropdown, classListContainer, data }, ref) => {
  let men,women = (null);
  let refMen = React.createRef();
  let refWomen = React.createRef();

  // handler to manage switching dropdown on mobile device
  const handleMobileClick = (refGender) => {
    refMen.current.classList.add('displayNone');
    refWomen.current.classList.add('displayNone');
    refGender.current.classList.remove('displayNone');
    
  };
  // when loading end, create link list 
  if (!data.menLoading && !data.womenLoading ) {    
    men = (data.nav.homme.map((current) => (<Link to={`/shop/homme/${current.customId}`} key={current._id}>{current.name}</Link>)));
    women = (data.nav.femme.map((current) => (<Link to={`/shop/femme/${current.customId}`} key={current._id}>{current.name}</Link>)));    
  }

  return (
    <div className={`link-container ${classListContainer}`} ref={ref}>
      <div className={classLinkContainer}>
        <div onClick={() => {handleMobileClick(refMen)} }><Link id="men" className="categories" to="/">HOMMES</Link></div>
        <div ref={refMen} className={classDropdown}>
          {men}
        </div>
      </div>
      <div className={classLinkContainer}>
        <div onClick={() => {handleMobileClick(refWomen)}}><Link id="women" className="categories" to="/">FEMMES</Link></div>
        <div ref={refWomen} className={classDropdown}>
          {women}
        </div>
      </div>
      <div className={classLinkContainer}>
        <div><Link id="trend" className="categories" to="/tendances">TENDANCES</Link></div>
      </div>
      <div className={classLinkContainer}>
        <div><Link id="challenges" className="categories" to="/defi">DEFIS</Link></div>
      </div>
    </div>
  );
});

Category.propTypes = {
  class1: PropTypes.string,
  class2: PropTypes.string,
  class3: PropTypes.string,
};
Category.defaultProps = {
  class1: '',
  class2: '',
  class3: '',
};

export default Category;
