const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const counter = require('./counter');

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

exports.readOne = (id, callback) => {
  fs.readFile(exports.dataDir + '/' + id.toString() + '.txt', (err, item) => {
    if (err) {
      callback(new Error(`No item with id: ${id}`), {});
    } else {
      callback(null, { id: id, text: item.toString() });
    }
  });
};

exports.readAll = (callback) => {
  fs.readdir(exports.dataDir, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      var data = [];
      _.each(items, (item, idx) => {
        let trimmed = item.slice(0, item.indexOf('.txt'));
        data.push({ id: trimmed, text: trimmed });
      });
      callback(null, data);
    }
  });
};

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

exports.delete = (id, callback) => {
  fs.unlink(exports.dataDir + '/' + id.toString() + '.txt', (err, item) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, item);
    }
  });
  // var item = items[id];
  // delete items[id];
  // if (!item) {
  //   // report an error if item not found
  //   callback(new Error(`No item with id: ${id}`));
  // } else {
  //   callback();
  // }
};

// Config+Initialization code -- DO NOT MODIFY /////////////////////////////////

exports.dataDir = path.join(__dirname, 'data');

exports.initialize = () => {
  if (!fs.existsSync(exports.dataDir)) {
    fs.mkdirSync(exports.dataDir);
  }
};
