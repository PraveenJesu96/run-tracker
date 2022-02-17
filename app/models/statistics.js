import DS from 'ember-data';

export default DS.Model.extend({
    calories: DS.belongsTo('story'),
    distance: DS.belongsTo('story'),
    speed: DS.belongsTo('story'),
    time: DS.belongsTo('story'),
    userId: DS.belongsTo('story'),
    type: DS.belongsTo('story')
});
