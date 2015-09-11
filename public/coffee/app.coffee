@App = new Backbone.Marionette.Application

@App = 
	Models: {}
	Collections: {}
	ItemViews: {}
	CompositeViews: {}

@App.addRegions
	tableRegion: '#table-region'

@App.on "initialize:after", (options) ->
	if Backbone.history
		Backbone.history.start()


###
Table
###
class App.Models.Table extends Backbone.Model
	initialize: ->
		console.log 'M-Table init'

class App.Collections.Table extends Backbone.Collection
	model: App.Models.Table
	initialize: ->
		console.log 'C-Table init'

class App.ItemViews.EmptyView extends Marionette.ItemView
	template: "#empty-view"
	initialize: (options) ->
		console.log options

class App.ItemViews.TableRow extends Marionette.ItemView
	template: "#table-row"

class App.CompositeViews.Table extends Marionette.CompositeView
	template: "#table"
	itemView: App.ItemViews.TableRow
	itemViewContainer: 'tbody'
	emptyView: App.ItemViews.EmptyView

###
Routers
###