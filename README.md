# binlist

## Usage
```javascript
lookup('XXXXXX').then(function(res){
  console.log(res);
  /*
  { bin: 'XXXXXX',
    brand: 'VISA',
    issuer: 'NATIONAL WESTMINSTER BANK PLC',
    type: 'DEBIT',
    country_code: 'GB',
    is_prepaid: false }
  */
}, function(err){
  console.log(err);
});
```
