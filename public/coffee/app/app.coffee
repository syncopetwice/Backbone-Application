App = new Marionette.Application()

App.addRegions
	mainRegion: '#main-region'

class App.ItemView extends Marionette.ItemView
	template: "#static-template"
	tagName: "li"

class App.CollectionView extends Marionette.CollectionView
	tagName: "ul"
	childView: App.ItemView

$(document).ready ->
	contacts = new App.Entities.Contacts(
		[
			{
				firstName: 'Bob'
				lastName: 'Jomes'
			}
			{
				firstName: 'Bobby'
				lastName: 'Jaasgmeson'
			}
			{
				firstName: 'Aob'
				lastName: 'Jamasffases'
			}
			{
				firstName: 'Zob'
				lastName: 'Jafasfmes'
			}
			{
				firstName: 'Bob'
				lastName: 'Jbmes'
			}
			{
				firstName: 'Xob'
				lastName: 'Jaasfasfmes'
			}
		]
	)
	contactsCollectionView = new App.CollectionView (
		collection: contacts
	)
	App.mainRegion.show(contactsCollectionView)

App.start()