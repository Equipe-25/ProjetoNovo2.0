// import Vue from "vue";
import axios from 'axios'
// import store from "../store";
// import { api } from "../config/env";
// import { Notify } from "quasar";

export const Connection = axios.create({
  baseURL: 'http://localhost:8000/api/'
})