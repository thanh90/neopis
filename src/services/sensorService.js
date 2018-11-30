import axios from 'axios';
axios.defaults.withCredentials = true;

export default {
  getGatewayInfo(){
    return axios.get('/api/v2/things/7');
  },
  getSensorData(gwId, sensorId, params) {
    return axios.get(`/api/v2/gateways/${gwId}/sensors/${sensorId}`, {params});
  },
  getSensorsData(gwId, params) {
    return axios.get(`/api/v2/gateways/${gwId}`, {params});
  },
}