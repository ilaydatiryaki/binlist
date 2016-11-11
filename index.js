var request = require('superagent');
var q = require('q');

var lookup = function(bin){
  var deffered = q.defer();
  request.get('https://binlist.net/json/'+bin).end(function(err, response){
    if(err){
      deffered.reject(err);
    } else {
      try{
        var binResponse = JSON.parse(response.text)
      } catch (e){
        deffered.reject(e);
      }

      //Backwards compatibility
      binResponse.issuer = binResponse.bank;
      binResponse.type = binResponse.card_type;
      binResponse.is_prepaid = false;

      deffered.resolve(binResponse);
    }
  });
  return deffered.promise;
};

module.exports = lookup;
