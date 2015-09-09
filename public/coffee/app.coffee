window.App = App || {}

template = (id) ->
	_.template( $('#' + id).html())


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

###
	Parent
###
class App.Views.User extends Backbone.View

	model: userModel

	initialize: ->
		console.log ':: App.Views.User'
		console.log @el
		@render()

	render: ->
		@$el.html(@template(@model.toJSON()))
		@

###
	Childs Extends Parent
###

###
	User Avatar View
###
class App.Views.User.Avatar extends App.Views.User

	template: _.template($('#avatar').html())

	el: $('.avatar')

###
	User Data View
###
class App.Views.User.Data extends App.Views.User

	template: _.template($('#data').html())

	el: $('.data')

###
	User Dates View
###
class App.Views.User.Dates extends App.Views.User

	template: _.template($('#dates').html())

	el: $('.dates')

userAvatar = new App.Views.User.Avatar
userData = new App.Views.User.Data
userDates = new App.Views.User.Dates


