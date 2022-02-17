import Component from '@ember/component';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Component.extend({
    selectedOption: {
        value: false
    },
    showModal: {
        value: false
    },
    currentActivity: {

    },
    email: '',
    password: '',
    router: Route,
    store: service(),
    init() {
        this._super(arguments);
        this.store.findAll('dashboard').then((data) => {
            this.currentActivity = data;
        });
    },
    actions: {
        onSignupOrLogin (choice) {
            this.set('selectedOption.value', choice === 'login');
        },
        createAccount() {
            let create = this.store.createRecord('authentication', {
                id: this.email,
                email: this.email,
                password: this.password
            });
            create.save();
            this.set('email', '');
            this.set('password', '');
            alert('Successfully created account. Please click login');
        },
        navigateToHomePage() {
            this.homepage();
        },
        signIn() {
            this.store.findRecord('authentication', this.email).then((data) => {
                if (data.email.toLowerCase() === this.email.toLowerCase() && data.password.toLowerCase() === this.password.toLowerCase()) {
                    alert('Successfully logged in. Redirecting to dashboad');
                    this.store.findRecord('userloggedin', '1').then(function(loggedIn) {
                        if (loggedIn.username) {
                            loggedIn.username = data.email
                            loggedIn.save();
                        } else {
                            let create = this.store.createRecord('userloggedin', {
                                id: "1",
                                username: this.email,
                            });
                            create.save();
                        }
                      });
                    this.actions.navigateToHomePage.call(this);
                } else {
                    alert('Invalid Credentials');
                }
            }).catch((err) => {
                alert('Invalid credentials');
            });
        }
    }
});
