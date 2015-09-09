var App, app, cll,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

App = (function(superClass) {
  extend(App, superClass);

  function App() {
    return App.__super__.constructor.apply(this, arguments);
  }

  App.prototype.initialize = function(options) {
    return console.log(options.container);
  };

  return App;

})(Mn.Application);

app = new App({
  container: '#app'
});

app.on("before:start", function() {
  var preloader;
  preloader = function() {
    return $('#preloader').hide();
  };
  setTimeout(preloader, 500);
  return console.log('before:start');
});

App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  LayoutView: {}
};

App.Models.User = (function(superClass) {
  extend(User, superClass);

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User.prototype.initialize = function() {
    console.log(':: App.Models.User');
    return this.model(fetch());
  };

  return User;

})(Backbone.Model);

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

cll = new App.Collections.User();

console.log(cll);
