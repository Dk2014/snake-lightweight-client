import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { API_URL, SNAKE_CLIENT_NAME } from '@/common/config'

const HEADER_SNAKE_CLIENT_NAME = 'X-Snake-Client'

const ApiService = {
  init () {
    // TODO: Create API mocks.
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setHeader () {
    Vue.axios.defaults.headers.common[HEADER_SNAKE_CLIENT_NAME] =
      `${SNAKE_CLIENT_NAME}`
  },

  query (resource, params) {
    return Vue.axios.get(`${resource}`, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },

  get (resource) {
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },

  put (resource, params) {
    return Vue.axios.put(`${resource}`, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },

  delete (resource) {
    return Vue.axios.delete(`${resource}`).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  }
}

export default ApiService

export const GamesService = {
  get (id) {
    return ApiService.get(`games/${id}`, id)
  },

  create (params) {
    return ApiService.post('games', params)
  },

  delete (id) {
    return ApiService.delete(`games/${id}`)
  },

  all () {
    return ApiService.get('games/')
  },

  objects (id) {
    return ApiService.get(`games/${id}/objects`)
  },

  broadcast (id) {
    return ApiService.get(`games/${id}/broadcast`)
  }
}

export const ServerService = {
  capacity () {
    return ApiService.get('capacity')
  },

  info () {
    return ApiService.get('info')
  },

  ping () {
    return ApiService.get('ping')
  }
}