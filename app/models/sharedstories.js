import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr('string'),
    distance: DS.attr('string'),
    time: DS.attr('string'),
    speed: DS.attr('string'),
    userName: DS.attr('string'),
    isShared: DS.attr('boolean')
});
