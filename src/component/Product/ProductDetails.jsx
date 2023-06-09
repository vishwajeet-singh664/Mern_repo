import React, { useEffect } from "react";
import { Carousel } from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import Loader from "../Loader/Loader";
import ReviewCard from './ReviewCard'
// import {useAlert} from 'react-alert'
const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
//     if(error){
// alert.error(error);
// dispatch(clearErrors)

//     }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id,error]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };
  return (
    <>
    {loading? <Loader/> : ( <>
        <div className="ProductDetails">
        <div>
          <Carousel>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={item.url}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>

        <div>
          <div className="detailsBlok-1">
            <h2>{product.name}</h2>
            <p>Product # {product.id}</p>
          </div>
          <div className="detailsBlock-2">
            {/* <ReactStars {...options} /> */}
            <span>({product.numOfReviews} Reviews)</span>
          </div>

          <div className="detailsBlock-3">
            <h1>{`₹${product.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input value="1" type="number" />
                <button>+</button>
              </div>
              <button>Add to Cart</button>
            </div>

            <p>
              Status:
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
          </div>

          <div className="detailsBloack-4">
            Description : <p>{product.description}</p>
          </div>
          <button className="submitReview">Submit Review</button>
        </div>
      </div>
      <h3 className="reviewsHeading">REVIEWS</h3>
      {product.reviews && product.reviews[0] ? (
        <div className="reviews">
          {product.reviews &&
            product.reviews.map((review) => <ReviewCard review={review} />)}
        </div>
      ) : (
        <p className="noReviews">No Reviews Yet</p>
      )}
</>
        
    )}
          </>
  );
};

export default ProductDetails;
