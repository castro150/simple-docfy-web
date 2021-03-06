(function() {
	'use strict';

	angular.module('simpleDocfyWebApp').factory('CalendarioService', ['DateUtils', CalendarioService]);

	function CalendarioService(DateUtils) {
		var service = this;

		service.buscarEventos = function() {
			var eventos = [{
				title: 'My event title', // The title of the event
				type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
				startsAt: DateUtils.somarDias(new Date(), 1), // A javascript date object for when the event starts
				endsAt: DateUtils.somarDias(new Date(), 2), // Optional - a javascript date object for when the event ends
				editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
				deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
				draggable: true, //Allow an event to be dragged and dropped
				resizable: true, //Allow an event to be resizable
				incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
				recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
				cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
			}];

			return eventos;
		};

		return {
			buscarEventos: service.buscarEventos
		};
	}
})();
