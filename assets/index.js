// open trip
apiKey = '5ae2e3f221c38a28845f05b6fc7cd900dbdfe52e778e3a8d9a518c53'
// open trip
apiUrl = 'http://api.opentripmap.com/0.1/ru/places/bbox?lon_min=-95.358421&lat_min=29.749907&lon_max=-95.372809&lat_max=29.859052&kinds=churches&format=geojson&apikey='
openTrip = 'https://api.opentripmap.com/0.1/en/places/radius?radius=32186&lon=-95.3632&lat=29.7662&kinds=foods&rate=1&limit=50&apikey=5ae2e3f221c38a28845f05b6fc7cd900dbdfe52e778e3a8d9a518c53';
openTrip = 'https://api.opentripmap.com/0.1/en/places/radius?radius=32186&lon=-95.3632&lat=29.7662&kinds=foods&rate=2&limit=50&apikey=5ae2e3f221c38a28845f05b6fc7cd900dbdfe52e778e3a8d9a518c53';
// api - opentrip documentation = https://opentripmap.io/docs

fetch(openTrip) 
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
    });
// api - opentrip documentation = https://opentripmap.io/docs

fetch(openTrip) 
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0; i < 5; i++) {
            // This loops through the first five above and attaches to the next fetch
            var featureName = data.features[i].properties.name;
            var xid = data.features[i].properties.xid;
        
             // open trip api for detailed info
            var xidUrl = 'https://api.opentripmap.com/0.1/en/places/xid/' + xid + '?apikey=' + apiKey;
          fetch(xidUrl) 
          .then(function (response) {
              return response.json();
          })
          .then(function (xid) {
              console.log(xid)
      
            
    });        
};  
          });
