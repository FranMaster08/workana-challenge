const https = require('https');
const fs = require('fs').promises;
const crypto = require('crypto');

function doRequest() {
  return new Promise((resolve, reject) => {
    https
      .request('https://www.google.com', res => {
        let data = '';
        res.on('data', chunk => {
          data += chunk;
        });
        res.on('end', () => {
          resolve(data);
        });
      })
      .on('error', reject)
      .end();
  });
}

function getHash(data) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(data, 'b', 100000, 512, 'sha512', (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash.toString('hex'));
      }
    });
  });
}

function readFileAsync(fileName) {
  return fs.readFile(fileName, 'utf8');
}

module.exports = { doRequest, getHash, readFileAsync };
