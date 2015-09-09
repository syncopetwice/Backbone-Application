var App, appCollectionsUser, userAvatar, userData, userDates, userModel,
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

  User.prototype.initialize = function() {
    return console.log(':: App.Models.User');
  };

  return User;

})(Backbone.Model);

userModel = new App.Models.User({
  user_name: 'Oleja Drozdovsky',
  user_name_href: 'https://google.com',
  user_image: 'http://orig01.deviantart.net/e483/f/2012/189/8/f/chibi_bulbasaur_by_o_melet-d56ijzg.png',
  data_role: "Backbone Developer",
  data_annual_sales: "1,000,000",
  data_coach: "Michael Scott",
  data_predicted_sales: "1,500,000",
  new_opp_created: 9,
  new_opp_expected: 12,
  closed_won_wins: 7,
  closed_won_expected: 9,
  sales_vs_target_percentage: '25%',
  dates_sales: 300000,
  dates_target: 450000
});

App.Collections.User = (function(superClass) {
  extend(User, superClass);

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User.prototype.initialize = function() {
    return console.log(':: App.Collections.User');
  };

  User.prototype.model = App.Models.User;

  User.prototype.url = '../users';

  return User;

})(Backbone.Collection);

appCollectionsUser = new App.Collections.User;

appCollectionsUser.fetch();

console.log(appCollectionsUser.size());


/*
	Parent
 */

App.Views.User = (function(superClass) {
  extend(User, superClass);

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User.prototype.model = userModel;

  User.prototype.initialize = function() {
    return this.render();
  };

  User.prototype.render = function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  };

  User.prototype.events = function() {
    return {
      'click a': 'link'
    };
  };

  User.prototype.link = function(event) {
    event.preventDefault();
    return console.log('click');
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

userData = new App.Views.User.Data;

userDates = new App.Views.User.Dates;
