Template.logit.events({
   'click #logit': function (e) {    
     console.log(e.target.href)
    var str = ''
    var line = ''
    var log = Log.find().fetch()       
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
    return Log.find({},{sort: {time: -1}}).fetch()    
  }, 
})
