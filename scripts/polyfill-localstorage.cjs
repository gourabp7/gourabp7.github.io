// Polyfill localStorage for Node.js — needed by @typescript/vfs (via shiki-twoslash)
// Node 25+ has a built-in localStorage that requires --localstorage-file to work,
// so we must override it unconditionally if getItem is missing.
if (typeof globalThis.localStorage === 'undefined' || typeof globalThis.localStorage.getItem !== 'function') {
  const data = {};
  globalThis.localStorage = {
    getItem: function(key) { return data.hasOwnProperty(key) ? data[key] : null; },
    setItem: function(key, value) { data[key] = String(value); },
    removeItem: function(key) { delete data[key]; },
    clear: function() { for (var k in data) delete data[k]; },
    get length() { return Object.keys(data).length; },
    key: function(index) { return Object.keys(data)[index] || null; },
  };
}
