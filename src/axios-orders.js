import axios from "axios";
const instane = axios.create({
  baseURL: "https://cinemabooking-12d1c.firebaseio.com/"
});
export default instane;
