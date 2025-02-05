import PropTypes from 'prop-types';
import CategoryItem from '../CategoryItem/CategoryItem';
import '../Category/Category.styles.scss';

const Category = ({ categories }) => {
  return (
    <div className="category-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

Category.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Category;
