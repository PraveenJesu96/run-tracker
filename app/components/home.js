import Component from '@ember/component';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    map: service(),
    showModal: {
        value: false
    },
    currentActivity: {},
    currentLogin: '',
    type: '',
    calories: '',
    distance: '',
    time: '',
    speed: '',
    sharedStories: [],
    init() {
        this._super(...arguments);
        var initThis = this;
        this.store.findRecord('userloggedin', '1').then(function(loggedIn) {
            initThis.set('currentLogin', loggedIn.username);

            initThis.store.query('dashboard', { filter: { userId: initThis.currentLogin } }).then((dashboard) => {
                set(initThis, 'currentActivity', dashboard);
            });
            initThis.store.query('sharedstories', {}).then((result) => {
                console.log(result);
            });
        });
        $.getJSON('sharedstories').then((result) => {
            this.set('sharedStories', result.data);
        });
    },

    actions: {
        addToMyDashboard() {
                let create = this.store.createRecord('dashboard', {
                    calories: this.calories,
                    distance: this.distance,
                    speed: this.speed,
                    time: this.time,
                    type: this.type,
                    userId: this.currentLogin,
                    isShared: true
                });
                create.save();
                this.set('calories', '');
                this.set('distance', '');
                this.set('speed', '');
                this.set('time', '');
                this.set('type', '');
                this.set('showModal.value', false);
                this.store.query('dashboard', { filter: { userId: this.currentLogin } }).then((dashboard) => {
                    this.set('currentActivity', dashboard);
                });
                //this.map.getMapElement();
        },
        shareActivity( activity, shareChoice) {
            activity.isShared = shareChoice === 'share';
        },
        closeActivityModal() {
            this.set('showModal.value', false);
        },
        showModal() {
            this.set('showModal.value', true);
        },
        logout() {
            this.store.findRecord('userloggedin', '1' ).then((currentLogin) => {
                currentLogin.deleteRecord();
                currentLogin.save();
            }).catch((err) = {
            }).finally(() => {
                alert('no data found');
            })
        }
    }
});
