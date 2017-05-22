
var lobbystorage = function() {
  this.listeners = [];
  var that = this;
  this.subscribe = function(name, fn) {
    that.listeners.push({
      name,
      fn,
    });
  };

  this.emit = function(n, val) {
    console.log(that.listeners);
    console.log("EMITTED");
    localStorage.setItem(n, val);
    for(var i = 0; i < that.listeners.length; i++) {
      if(that.listeners[i].name == n) {
        that.listeners[i].fn();
        console.log("performed function");
      }
    }
  };
};

const lobbyStorage = new lobbystorage();

module.exports = lobbyStorage;
