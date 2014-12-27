/**
 Line Model
 @class LineModel
 @constructor
 @return {Object} instantiated LineModel
 **/
define(['jquery', 'backbone'], function ($, Backbone) {

    var LineModel = Backbone.Model.extend({

        /**
         Constructor
         @method initialize
         **/
        initialize: function () {
        },
        urlRoot: '/Line',
        idAttribute: 'line_id'
    });

    return LineModel;

});