Logit
=====

Really simple logging for [Meteor](http://meteor.com).

## What This Does

Logit mimics console.log() by writing messages to a collection call 'Logit'.

The package includes a simple template (called 'logit') which shows all logs in the collection.

The template also includes a 'download'  which allows you to export logs to a txt file.

## Use

The logit() function takes one argument: message.

All logs are automatically time-stamped.

To see the log, just include the logit template somewhere in your app:

```html
  {{> logit}}
```
