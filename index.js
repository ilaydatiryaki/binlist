var request = require('superagent');
var q = require('q');

var lookup = function(bin){
  var deffered = q.defer();
  request.get('https://bins.payout.com/api/v1/bins/'+bin).end(function(err, response){
    if(err){
      if(response){
        deffered.reject(JSON.parse(response.text));
      } else {
        deffered.resolve(JSON.parse(err));
      }
    } else {
      deffered.resolve(JSON.parse(response.text));
    }
  })
  return deffered.promise;
}

module.exports = lookup;
