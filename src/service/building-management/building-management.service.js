/**
 * Created by etianqq on 2017/3/30.
 */
import axios from 'axios'

var buildingService = {
    getBuildingData(){
        return axios.get('/buildingData');
    }
}
export {buildingService}
