import { Link, useNavigate } from "react-router-dom";


const CategoriesCard = ({ category }) => {
  const { id, name, img } = category;

  const navigate = useNavigate();
  const handleCategory = (category) => {
    navigate(`/category/${category}`);
  }
  
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body justify-center items-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-center">
          <button onClick={() => handleCategory(name)}
            className="btn btn-primary"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
