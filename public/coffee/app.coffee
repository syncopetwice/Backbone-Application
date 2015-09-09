window.App = App || {}

App =
	Models: {}
	Collections: {}
	Views: {}

class App.Models.User extends Backbone.Model
	initialize: ->
		console.log ':: App.Models.User'

userModel = new App.Models.User
	user_name: 'Oleja Drozdovsky'
	user_name_href: 'https://google.com'
	user_image: 'http://orig01.deviantart.net/e483/f/2012/189/8/f/chibi_bulbasaur_by_o_melet-d56ijzg.png'
	data_role: "Backbone Developer"
	data_annual_sales: "1,000,000"
	data_coach: "Michael Scott"
	data_predicted_sales: "1,500,000"
	new_opp_created: 9
	new_opp_expected: 12
	closed_won_wins: 7
	closed_won_expected: 9
	sales_vs_target_percentage: '25%'
	dates_sales: 300000
	dates_target: 450000


class App.Collections.User extends Backbone.Collection
	initialize: ->
		console.log ':: App.Collections.User'
	model: App.Models.User
	url: 'http://localhost:3000/users'

class App.Views.User_Avatar extends Backbone.View

	template: _.template($('#avatar').html())

	el: $('.avatar')

	initialize: ->
		console.log ':: App.Views.User'
		console.log @el
		@render()

	render: ->
		@$el.html(@template(@model.toJSON()))
		@

class App.Views.User_Data extends Backbone.View

	template: _.template($('#data').html())

	el: $('.data')

	initialize: ->
		console.log ':: App.Views.User_Data'
		console.log @el
		@render()

	render: ->
		@$el.html(@template(@model.toJSON()))
		@

class App.Views.User_Dates extends Backbone.View

	template: _.template($('#dates').html())

	el: $('.dates')

	initialize: ->
		console.log ':: App.Views.User_Dates'
		console.log @el
		@render()

	render: ->
		@$el.html(@template(@model.toJSON()))
		@

user_avatar = new App.Views.User_Avatar
	model: userModel
user_data = new App.Views.User_Data
	model: userModel
user_dates = new App.Views.User_Dates
	model: userModel

