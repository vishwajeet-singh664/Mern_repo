import axios from 'axios'
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  ADMIN_PRODUCT_REQUEST,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  CLEAR_ERROR
} from '../constants/ProductConstants';
export const getProduct = (keyword = "", currentPage = 1, price = [0, 99999], category, ratings = 0) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });
    let link = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&ratings[gte]=${ratings}`

    if (category) {
      link = `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
    }
    const { data } = await axios.get(link);

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: `${error.response.data.message || error.message}`,
    });
  }
};



export function getProductDetails(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_DETAILS_REQUEST,
      });

      const { data } = await axios.get(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products/${id}`);

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: `${error.response.data.message || error.message}`,
      });
    }
  };
}
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });

    const { data } = await axios.get(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products/admin/products`);

    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: `${error.response.data.message || error.message}`,
    });
  }
};
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });
    const token = localStorage.getItem('token');
    const config = {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.post(
      `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products/create`,
      productData,
      config
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: `${error.response.data.message || error.message}`,
    });
  }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    const token = localStorage.getItem('token');

    const config = {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.put(
      `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: `${error.response.data.message || error.message}`,
    });
  }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const token = localStorage.getItem('token');


    const { data } = await axios.delete(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: `${error.response.data.message || error.message}`,
    });
  }
};



export const clearErrors = () => async (dispatch) => {

  dispatch({ type: CLEAR_ERROR })
}

export const newReview = (reviewData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    };

    const { data } = await axios.put(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products/review`, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: `${error.response.data.message || error.message}`,
    });
  }
};


// Get All Reviews of a Product
export const getAllReviews = (id) => async (dispatch) => {
  try {

    dispatch({ type: ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products/reviews?id=${id}`);

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Product
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_REQUEST });
    const token = localStorage.getItem('token');

    const { data } = await axios.delete(
      `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/products/reviews?id=${reviewId}&productId=${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    );

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: `${error.response.data.message || error.message}`,
    });
  }
};


