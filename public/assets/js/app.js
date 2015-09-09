var App, userModel, user_avatar, user_data, user_dates,
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

  User.prototype.url = 'http://localhost:3000/users';

  return User;

})(Backbone.Collection);

App.Views.User_Avatar = (function(superClass) {
  extend(User_Avatar, superClass);

  function User_Avatar() {
    return User_Avatar.__super__.constructor.apply(this, arguments);
  }

  User_Avatar.prototype.template = _.template($('#avatar').html());

  User_Avatar.prototype.el = $('.avatar');

  User_Avatar.prototype.initialize = function() {
    console.log(':: App.Views.User');
    console.log(this.el);
    return this.render();
  };

  User_Avatar.prototype.render = function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  };

  return User_Avatar;

})(Backbone.View);

App.Views.User_Data = (function(superClass) {
  extend(User_Data, superClass);

  function User_Data() {
    return User_Data.__super__.constructor.apply(this, arguments);
  }

  User_Data.prototype.template = _.template($('#data').html());

  User_Data.prototype.el = $('.data');

  User_Data.prototype.initialize = function() {
    console.log(':: App.Views.User_Data');
    console.log(this.el);
    return this.render();
  };

  User_Data.prototype.render = function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  };

  return User_Data;

})(Backbone.View);

App.Views.User_Dates = (function(superClass) {
  extend(User_Dates, superClass);

  function User_Dates() {
    return User_Dates.__super__.constructor.apply(this, arguments);
  }

  User_Dates.prototype.template = _.template($('#dates').html());

  User_Dates.prototype.el = $('.dates');

  User_Dates.prototype.initialize = function() {
    console.log(':: App.Views.User_Dates');
    console.log(this.el);
    return this.render();
  };

  User_Dates.prototype.render = function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  };

  return User_Dates;

})(Backbone.View);

user_avatar = new App.Views.User_Avatar({
  model: userModel
});

user_data = new App.Views.User_Data({
  model: userModel
});

user_dates = new App.Views.User_Dates({
  model: userModel
});
