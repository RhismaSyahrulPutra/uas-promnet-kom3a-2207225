import axios from 'axios';

const API_BASE_URL = "http://localhost:8081";

class UserService {
  getItem() {
    return axios.get(`${API_BASE_URL}/inventory_rhismasyahrulputra`);
  }

  createItem(inventory) {
    return axios.post(`${API_BASE_URL}/inventory_rhismasyahrulputra`, inventory);
  }

  getItemById(inventoryId) {
    return axios.get(`${API_BASE_URL}/inventory_rhismasyahrulputra/${inventoryId}`);
  }

  updateItem(inventory, inventoryId) {
    return axios.put(`${API_BASE_URL}/inventory_rhismasyahrulputra/${inventoryId}`, inventory);
  }

  deleteItem(inventoryId) {
    return axios.delete(`${API_BASE_URL}/inventory_rhismasyahrulputra/${inventoryId}`);
  }

  searchItemByName(name) {
    return axios.get(`${API_BASE_URL}/inventory_rhismasyahrulputra/search?name=${name}`);
  }
}

export default new UserService();
