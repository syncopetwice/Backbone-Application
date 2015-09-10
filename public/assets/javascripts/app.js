var App, appCollectionsUser, userAvatar, userModel,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

window.App = App || {};

App = {
  Models: {},
  Collections: {},
  Views: {}
};

App.Models.User = (function(superClass) {
  extend(User, superClass);

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User.prototype.initialize = function() {};

  return User;

})(Backbone.Model);

userModel = new App.Models.User({
  user_name: 'BLBSR',
  user_name_href: 'https://google.com',
  user_image: 'http://orig01.deviantart.net/e483/f/2012/189/8/f/chibi_bulbasaur_by_o_melet-d56ijzg.png'
});

App.Collections.User = (function(superClass) {
  extend(User, superClass);

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User.prototype.initialize = function() {};

  User.prototype.model = App.Models.User;

  User.prototype.url = '/users';

  return User;

})(Backbone.Collection);

appCollectionsUser = new App.Collections.User;

appCollectionsUser.fetch();


/*
	Parent
 */

App.Views.User = (function(superClass) {
  extend(User, superClass);

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User.prototype.model = appCollectionsUser;

  User.prototype.initialize = function() {
    return this.render();
  };

  User.prototype.render = function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  };

  return User;

})(Backbone.View);


/*
	Childs Extends Parent
 */


/*
	User Avatar View
 */

App.Views.User.Avatar = (function(superClass) {
  extend(Avatar, superClass);

  function Avatar() {
    return Avatar.__super__.constructor.apply(this, arguments);
  }

  Avatar.prototype.template = _.template($('#avatar').html());

  Avatar.prototype.el = $('.avatar');

  return Avatar;

})(App.Views.User);


/*
	User Data View
 */

App.Views.User.Data = (function(superClass) {
  extend(Data, superClass);

  function Data() {
    return Data.__super__.constructor.apply(this, arguments);
  }

  Data.prototype.template = _.template($('#data').html());

  Data.prototype.el = $('.data');

  return Data;

})(App.Views.User);


/*
	User Dates View
 */

App.Views.User.Dates = (function(superClass) {
  extend(Dates, superClass);

  function Dates() {
    return Dates.__super__.constructor.apply(this, arguments);
  }

  Dates.prototype.template = _.template($('#dates').html());

  Dates.prototype.el = $('.dates');

  return Dates;

})(App.Views.User);

userAvatar = new App.Views.User.Avatar;
