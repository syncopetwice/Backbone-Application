class App extends Mn.Application
	initialize: (options) ->
		console.log options.container

app = new App
	container: '#app'

app.on "before:start", ->
	preloader = ->
		$('#preloader').hide()
	setTimeout(preloader, 500)
	console.log 'before:start'

App =
	Models: {}
	Collections: {}
	Views: {}
	Routers: {}
	LayoutView: {}

class App.Models.User extends Backbone.Model
	initialize: ->
		console.log ':: App.Models.User'
		@model do fetch

class App.Collections.User extends Backbone.Collection
	initialize: ->
		console.log ':: App.Collections.User'

	model: App.Models.User
	url: 'http://localhost:3000/users'

cll = new App.Collections.User()
console.log cll
