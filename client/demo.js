Template.main.events({
  'click .easy': function (event) {
    Session.set("lastClickId",
                Clicks.insert({ when: new Date }));
  },
  'click .hard': function (event) {
    Meteor.call("addClick", new Date);
  }
});


Template.main.clicks = function () {
  return Clicks.find({}, {sort: {when: -1}});
};

Template.main.mostRecentClickTime = function () {
  var lastId = Session.get("lastClickId");
  if (! lastId)
    return "none";
  var click = Clicks.findOne(lastId)
  return click ? click.when : "missing??";
};

