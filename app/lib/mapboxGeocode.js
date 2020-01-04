const https = require('https');

function geocode(mapboxAccessToken, query, callback) {
  https.get(
    `https://api.tiles.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      query
    )}.json?access_token=${mapboxAccessToken}`,
    (response) => {
      var body = '';
      response.on('data', (d) => {
        body += d;
      });
      response.on('error', (e) => {
        callback(e);
      });
      response.on('end', () => {
        callback(null, JSON.parse(body));
      });
    }
  );
}

module.exports = geocode;
