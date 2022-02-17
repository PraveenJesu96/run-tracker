import Route from '@ember/routing/route';
import { get } from '@ember/object';
export default Route.extend({
    beforeModel() {
        this.store.query('userloggedin', {filter: {id: '1'}}).then((result) => {
            if (!get(result, 'content.length')) {
                this.transitionTo('login');
            }
        });
      }
});
