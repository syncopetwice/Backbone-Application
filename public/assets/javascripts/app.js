var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

this.App = new Backbone.Marionette.Application;

this.App = {
  Models: {},
  Collections: {},
  ItemViews: {},
  CompositeViews: {}
};

this.App.addRegions({
  tableRegion: '#table-region'
});

this.App.on("initialize:after", function(options) {
  if (Backbone.history) {
    return Backbone.history.start();
  }
});


/*
Table
 */

App.Models.Table = (function(superClass) {
  extend(Table, superClass);

  function Table() {
    return Table.__super__.constructor.apply(this, arguments);
  }

  Table.prototype.initialize = function() {
    return console.log('M-Table init');
  };

  return Table;

})(Backbone.Model);

App.Collections.Table = (function(superClass) {
  extend(Table, superClass);

  function Table() {
    return Table.__super__.constructor.apply(this, arguments);
  }

  Table.prototype.model = App.Models.Table;

  Table.prototype.initialize = function() {
    return console.log('C-Table init');
  };

  return Table;

})(Backbone.Collection);

App.ItemViews.EmptyView = (function(superClass) {
  extend(EmptyView, superClass);

  function EmptyView() {
    return EmptyView.__super__.constructor.apply(this, arguments);
  }

  EmptyView.prototype.template = "#empty-view";

  EmptyView.prototype.initialize = function(options) {
    return console.log(options);
  };

  return EmptyView;

})(Marionette.ItemView);

App.ItemViews.TableRow = (function(superClass) {
  extend(TableRow, superClass);

  function TableRow() {
    return TableRow.__super__.constructor.apply(this, arguments);
  }

  TableRow.prototype.template = "#table-row";

  return TableRow;

})(Marionette.ItemView);

App.CompositeViews.Table = (function(superClass) {
  extend(Table, superClass);

  function Table() {
    return Table.__super__.constructor.apply(this, arguments);
  }

  Table.prototype.template = "#table";

  Table.prototype.itemView = App.ItemViews.TableRow;

  Table.prototype.itemViewContainer = 'tbody';

  Table.prototype.emptyView = App.ItemViews.EmptyView;

  return Table;

})(Marionette.CompositeView);


/*
Routers
 */
