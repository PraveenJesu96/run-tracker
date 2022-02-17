import DS from 'ember-data';

export default DS.Model.extend({
    userName: DS.belongsTo('story')
});
