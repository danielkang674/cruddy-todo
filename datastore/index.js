const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const counter = require('./counter');
const Promise = require('bluebird');
Promise.promisifyAll(fs);


var items = {};

// Public API - Fix these CRUD functions ///////////////////////////////////////

exports.create = (text, callback) => {
  counter.getNextUniqueId((err, id) => {
    if (err) {
      callback(err, null);
    }
    fs.writeFile(exports.dataDir + '/' + id.toString() + '.txt', text, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, { id: id, text: text });
      }
    });
  });
};

exports.create = Promise.promisify(exports.create);

exports.readOne = (id, callback) => {
  fs.readFile(exports.dataDir + '/' + id.toString() + '.txt', (err, item) => {
    if (err) {
      callback(new Error(`No item with id: ${id}`), {});
    } else {
      callback(null, { id: id, text: item.toString() });
    }
  });
};

exports.readOne = Promise.promisify(exports.readOne);

exports.readAll = (callback) => {
  Promise.all(fs.readdirAsync(exports.dataDir).then(items => items.map(item => exports.readOne(path.basename(item, '.txt'))))).then(todos => callback(null, todos));
};

exports.readAll = Promise.promisify(exports.readAll);

exports.update = (id, text, callback) => {
  //var item = items[id];
  fs.readFile(exports.dataDir + '/' + id.toString() + '.txt', (err, file) => {
    if (err) {
      callback(err, null);
    } else {
      fs.writeFile(exports.dataDir + '/' + id.toString() + '.txt', text, (err, data) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, { id: id, text: text });
        }
      });
    }
  });

};

exports.update = Promise.promisify(exports.update);

exports.delete = (id, callback) => {
  fs.unlink(exports.dataDir + '/' + id.toString() + '.txt', (err, item) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
};

exports.delete = Promise.promisify(exports.delete);


// Config+Initialization code -- DO NOT MODIFY /////////////////////////////////

exports.dataDir = path.join(__dirname, 'data');

exports.initialize = () => {
  if (!fs.existsSync(exports.dataDir)) {
    fs.mkdirSync(exports.dataDir);
  }
};
