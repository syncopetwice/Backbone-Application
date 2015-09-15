App.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

	class Entities.Contact extends Backbone.Model

	class Entities.Contacts extends Backbone.Collection
		model: Entities.Contact
