import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr('string'),
    statistics: DS.belongsTo('statistics'),
    friends: DS.hasMany('friend')
});
