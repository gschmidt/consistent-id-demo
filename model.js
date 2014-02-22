Clicks = new Meteor.Collection("clicks");

Meteor.methods({
  addClick: function (when) {
    check(when, Date);
    var x = Clicks.insert({ when: when });
    if (Meteor.isClient) {
      console.log("client chose id", x);
      Session.set("lastClickId", x);
    } else {
      console.log("server chose id", x);
    }
    return x;
  }
});