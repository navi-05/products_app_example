import axios from 'axios'
import http from 'http'

export const getTenProducts = async(req, res) => {

  const url = "https://dummyjson.com/products?limit=10"
  const response = await axios.get(url)

  res.send(response.data)
}