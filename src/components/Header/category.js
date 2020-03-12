import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Category = React.forwardRef(({ class1, class2, class3, data }, ref) => {
  let men,women = (<></>);
  let refMen = React.createRef();
  let refWomen = React.createRef();
  const handleMobileClickMen = () => {
    if (!refWomen.current.classList.contains('displayNone')) {
      refWomen.current.classList.toggle('displayNone');
    }
    refMen.current.classList.toggle('displayNone');
  };
  const handleMobileClickWomen = () => {
    if (!refMen.current.classList.contains('displayNone')) {
      refMen.current.classList.toggle('displayNone');
    }
    refWomen.current.classList.toggle('displayNone');
  };


  if (!data.menLoading && !data.womenLoading) {    
    men = (data.nav.homme.map((current) => (<Link to={`/shop/homme/${current.customId}`} key={current._id}>{current.name}</Link>)));
    women = (data.nav.femme.map((current) => (<Link to={`/shop/femme/${current.customId}`} key={current._id}>{current.name}</Link>)));    
  }
  return (
    <div className={`link-container ${class3}`} ref={ref}>
      <div className={class1}>
        <div onClick={handleMobileClickMen}><Link id="men" className="categories" to="/">HOMMES</Link></div>
        <div ref={refMen} className={class2}>
          {men}
        </div>
      </div>
      <div className={class1}>
        <div onClick={handleMobileClickWomen}><Link id="women" className="categories" to="/">FEMMES</Link></div>
        <div ref={refWomen} className={class2}>
          {women}
        </div>
      </div>
      <div className={`${class1}`}>
        <div><Link id="trend" className="categories" to="/">TENDANCES</Link></div>
      </div>
      <div className={`${class1}`}>
        <div><Link id="challenges" className="categories" to="/">DEFIS</Link></div>
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
