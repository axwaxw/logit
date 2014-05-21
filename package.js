Package.describe({
  summary: "Very simple logging"
});

Package.on_use(function (api, where) {
  api.use(['underscore','templating'], 'client');
  api.add_files(['logit.html', 'logit.css', 'logit.js'], 'client');
  api.add_files('common.js', ['client', 'server']);
  
  if (api.export) 
    api.export('Logit');
});
