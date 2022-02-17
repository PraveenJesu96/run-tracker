import DS from 'ember-data';

export default DS.Model.extend({
    calories: DS.attr('string'),
    distance: DS.attr('string'),
    speed: DS.attr('string'),
    time: DS.attr('string'),
    type: DS.attr('string'),
    userId: DS.attr('string'),
    isShared: DS.attr('boolean')
});
