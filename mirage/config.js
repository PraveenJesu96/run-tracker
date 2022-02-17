export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '/api/v1';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.get('/stories', () => {
    return {
      data: [
        { id: 1, type: 'running', statistics: { calories: '10', distance: '1 KM', speed: '10 km/hr', time: '30 mins' }, friends: [{ userName: 'praveen', firstName: 'praveen', lastName: 'jesu' }, { userName: 'kishore', firstName: 'kishore', lastName: 'rajendran' }] },
        { id: 2, type: 'walking', statistics: { calories: '10', distance: '1 KM', speed: '10 km/hr', time: '30 mins' }, friends: [{ userName: 'praveen', firstName: 'praveen', lastName: 'jesu' }] },
        { id: 3, type: 'cycling', statistics: { calories: '10', distance: '1 KM', speed: '10 km/hr', time: '30 mins' }, friends: [{ userName: 'kishore', firstName: 'kishore', lastName: 'rajendran' }] }
      ]
    };
    }
  );
  this.passthrough('https://api.mapbox.com/**');
  this.get('/sharedstories', () => {
    console.log('API shared stories');
    return {
      data: [
        {
          id: 1, type: 'Running', distance: '10 km', speed: '10km/hr', time: '1 hr', userName: 'Praveen', isShared: true,
        },
        {
          id: 2, type: 'Running', distance: '10 km', speed: '10km/hr', time: '1 hr', userName: 'Kishore', isShared: false
        },
        {
          id: 3, type: 'Walking', distance: '10 km', speed: '10km/hr', time: '1 hr', userName: 'Kishore', isShared: true,
        },
        {
          id: 4, type: 'Cycling', distance: '10 km', speed: '10km/hr', time: '1 hr', userName: 'Praveen', isShared: true,
        },
        {
          id: 5, type: 'Jogging', distance: '10 km', speed: '10km/hr', time: '1 hr', userName: 'Kishore', isShared: true,
        }
      ]
    }
  });
  this.get('/authentication', () => {
    return {
      data: [
        {
          email: 'praveen', password: 'test@123'
        },
        {
          email: 'kishore', password: 'test@234'
        }
      ]
    };
    }
  );
  /*
    Shorthand cheatsheet:

    

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
