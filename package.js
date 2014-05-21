Package.describe({
  summary: "A Simple Logging Package"
});

Package.on_use(function (api) {
  api.add_files('common.js', ['client', 'server']);
  api.add_files('logit.html', 'client'); 
  api.add_files('logit.js', 'client');  
  api.export('Logit', ['client', 'server']);  
});
