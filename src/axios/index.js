import axios from 'axios'

axios.defaults.baseURL = '/api/'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
