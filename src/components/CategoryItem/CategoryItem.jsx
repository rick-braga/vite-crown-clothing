import PropTypes from 'prop-types';
import '../CategoryItem/CategoryItem.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="category-item-container">
      <div
        className="category-item-container__background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-item-container__body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryItem;
