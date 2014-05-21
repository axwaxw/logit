Logit = new Meteor.Collection('logit');

Logit = {}

Logit.log = function (message) {
  var now = new Date().getTime();
  var update = {}
  update.time = now - 7 * 3600 * 1000
  update.message = message
  console.log(update)
  Log.insert(update)
}
