Template.logit.events({
   'click #logit': function (e) {    
    var str = ''
    var line = ''
    var log = Logit.collection.find().fetch()       
    _.each(log, function(update){
    line = update.time + ', ' + update.message;
    str += line + '\r\n';
    }); 
    
    e.target.href = "data:text/csv;charset=utf-8," + escape(str)
    e.target.download = "logit.txt";
  }
});

Template.logit.helpers ({
  logs: function () {    
    return Logit.collection.find({},{sort: {time: -1}}).fetch()    
  }, 
})
