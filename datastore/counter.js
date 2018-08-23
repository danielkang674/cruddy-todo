const fs = require('fs');
const path = require('path');
const sprintf = require('sprintf-js').sprintf;
const Promise = require('bluebird');

var counter = 0;

// Private helper functions ////////////////////////////////////////////////////

// Zero padded numbers can only be represented as strings.
// If you don't know what a zero-padded number is, read the
// Wikipedia entry on Leading Zeros and check out some of code links:
// https://www.google.com/search?q=what+is+a+zero+padded+number%3F

const zeroPaddedNumber = (num) => {
  return sprintf('%05d', num);
};

let readCounter = (callback) => {
  fs.readFile(exports.counterFile, 'utf-8', (err, fileData) => {
    if (err) {
      callback(null, err);
    } else {
      callback(null, Number(fileData));
    }
  });
};

readCounter = Promise.promisify(readCounter);

let writeCounter = (count, callback) => {
  var counterString = zeroPaddedNumber(count);
  fs.writeFile(exports.counterFile, counterString, (err) => {
    if (err) {
      throw ('error writing counter');
    } else {
      callback(null, counterString);
    }
  });
};

writeCounter = Promise.promisify(writeCounter);


// Public API - Fix this function //////////////////////////////////////////////

exports.getNextUniqueId = (cb) => {
  readCounter((err, data) => {
    if (err) {
      cb(err, null);
    }
    data += 1;
    writeCounter(data, (err, counterString) => {
      if (err) {
        cb(err, null);
      }
      cb(null, zeroPaddedNumber(counterString));
    });
  });
};

exports.getNextUniqueId = Promise.promisify(exports.getNextUniqueId);


// Configuration -- DO NOT MODIFY //////////////////////////////////////////////

exports.counterFile = path.join(__dirname, 'counter.txt');
