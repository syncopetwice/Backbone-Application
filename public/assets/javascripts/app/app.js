var App,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App = new Marionette.Application();

App.addRegions({
  mainRegion: '#main-region'
});

App.ItemView = (function(superClass) {
  extend(ItemView, superClass);

  function ItemView() {
    return ItemView.__super__.constructor.apply(this, arguments);
  }

  ItemView.prototype.template = "#static-template";

  ItemView.prototype.tagName = "li";

  return ItemView;

})(Marionette.ItemView);

App.CollectionView = (function(superClass) {
  extend(CollectionView, superClass);

  function CollectionView() {
    return CollectionView.__super__.constructor.apply(this, arguments);
  }

  CollectionView.prototype.tagName = "ul";

  CollectionView.prototype.childView = App.ItemView;

  return CollectionView;

})(Marionette.CollectionView);

$(document).ready(function() {
  var contacts, contactsCollectionView;
  contacts = new App.Entities.Contacts([
    {
      firstName: 'Bob',
      lastName: 'Jomes'
    }, {
      firstName: 'Bobby',
      lastName: 'Jaasgmeson'
    }, {
      firstName: 'Aob',
      lastName: 'Jamasffases'
    }, {
      firstName: 'Zob',
      lastName: 'Jafasfmes'
    }, {
      firstName: 'Bob',
      lastName: 'Jbmes'
    }, {
      firstName: 'Xob',
      lastName: 'Jaasfasfmes'
    }
  ]);
  contactsCollectionView = new App.CollectionView({
    collection: contacts
  });
  return App.mainRegion.show(contactsCollectionView);
});

App.start();
