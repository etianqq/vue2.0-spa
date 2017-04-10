/**
 * Created by jiangyan on 2017/3/21.
 */
import axios from 'axios'

var homeService = {
  getHomeData(){
    return axios.get('/homeData');
  }
}
export { homeService }
