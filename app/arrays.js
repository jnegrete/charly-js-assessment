exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(total, item) { return total + item; });
  },

  remove: function(arr, item) {
    var index = arr.indexOf(item);
    while (index > -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    return this.remove(arr, item);
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(value) { count += value === item ? 1 : 0; });
    return count;
  },

  duplicates: function(arr) {
    var resp = [];
    arr.forEach(function(val, index) {
      if (resp.indexOf(val) === -1 && arr.indexOf(val, index + 1) > -1) {
        resp.push(val);
      }
    });
    return resp;
  },

  square: function(arr) {
    return arr.map(function(val) { return val * val; });
  },

  findAllOccurrences: function(arr, target) {
    var resp = [];
    var index = arr.indexOf(target);
    while (index > -1) {
      resp.push(index);
      index = arr.indexOf(target, index + 1);
    }
    return resp;
  }
};
