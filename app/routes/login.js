import Route from '@ember/routing/route';

export default Route.extend({

    actions: {
        navigate() {
           this.transitionTo('home')
        }
      },
      setupController(controller) {
        this._super(...arguments);
        controller.set('route', this);
      }
});
