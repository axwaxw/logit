Logit = {  
  collection: new Meteor.Collection('logit'),
  
  log: function (message) {
    var now = new Date()
    var update = {}
    update.time = now.toLocaleString()
    update.message = message
    //console.log(update)
    Logit.collection.insert(update)
  }
}
