import axios from 'axios';
import { getUserById, getReimById, createReim } from './employee';
import { getAllUsers, getReimByStatus, updateReim } from './manager';
import { updateUser } from './admin';

export const server = axios.create({
  baseURL: 'http://13.56.189.76:3004',
  withCredentials: true,
});

module.exports = {
  getUserById,
  getReimById,
  createReim,
  getAllUsers,
  getReimByStatus,
  updateReim,
  updateUser,
};
