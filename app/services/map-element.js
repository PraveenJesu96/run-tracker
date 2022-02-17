import Service from '@ember/service';
import {inject as service} from '@ember/service';
export default Service.extend({
    geocode: service(),
    map: service(),
    getMapElement () {
        this.geocode.fetchCoordinates().then((result) => {
            console.log(result);
        })
    }
});
