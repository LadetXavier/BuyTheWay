import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Category = React.forwardRef(({ class1, class2, class3, data }, ref) => {
  let men,women = (<></>);
  if(!data.menLoading && !data.womenLoading) {
    console.log(data);
    men = (data.nav.homme.map((current,key) => (<Link to={`/shop/homme/${key}`} key={key}>{current.name}</Link>)));
    women = (data.nav.femme.map((current,key) => (<Link to={`/shop/femme/${key}`} key={key}>{current.name}</Link>)));
  }
  return (
    <div className={`link-container ${class3}`} ref={ref}>
      <div className={class1}>
        <div><Link id="men" className="categories" to="/">HOMMES</Link></div>
        <div className={class2}>
          {men}
        </div>
      </div>
      <div className={class1}>
        <div><Link id="women" className="categories" to="/">FEMMES</Link></div>
        <div className={class2}>
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
