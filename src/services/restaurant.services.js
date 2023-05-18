import { BASE_URL } from "../constant/index";
import axios from "axios";

class RestaurantService {
  createRestaurant = (data) => {
    return axios.post(`${BASE_URL}/api/restaurant/createRestaurant`, data);
  };

  getAllRestaurant = () => {
    return axios.get(`${BASE_URL}/api/restaurant/getAllRestaurant`);
  };

  getRestaurant = (id) => {
    return axios.get(`${BASE_URL}/houses/${id}`);
  };

  getRestaurantByName = (city) => {
    return axios.get(`${BASE_URL}/houses?city=${city}`);
  };

  updateRestaurant = (id, data) => {
    return axios.patch(`${BASE_URL}/api/restaurant/updateRestaurant/${id}`, data);
  };

  deleteRestaurantbyId = (id) => {
    return axios.delete(`${BASE_URL}/api/restaurant/deleteRetaurant/${id}`);
  };

  uploadImages = (data) => {
    return axios.post(`${BASE_URL}/images`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  getRestaurantImagesById = (id) => {
    return axios.get(`${BASE_URL}/images/${id}`);
  };

  toggleRestaurantStatus = (id, isHouseActive) => {
    return axios.post(`${BASE_URL}/api/restaurant/restaurantstatus/${id}`, isHouseActive);
  };
}

export default new RestaurantService();