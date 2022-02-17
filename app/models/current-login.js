import DS from 'ember-data';

export default DS.Model.extend({
    currentLogin: DS.attr('string'),
});
