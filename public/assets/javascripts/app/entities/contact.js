var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  Entities.Contact = (function(superClass) {
    extend(Contact, superClass);

    function Contact() {
      return Contact.__super__.constructor.apply(this, arguments);
    }

    return Contact;

  })(Backbone.Model);
  return Entities.Contacts = (function(superClass) {
    extend(Contacts, superClass);

    function Contacts() {
      return Contacts.__super__.constructor.apply(this, arguments);
    }

    Contacts.prototype.model = Entities.Contact;

    return Contacts;

  })(Backbone.Collection);
});
