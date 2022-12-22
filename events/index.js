// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  #handlers = {};

  // Register an event handler
  on(eventName, callback) {
    if (!this.#handlers[eventName]) {
      this.#handlers[eventName] = [];
    }
    this.#handlers[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    this.#handlers[eventName]?.forEach(item => item());
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.#handlers[eventName] = [];
  }
}

module.exports = Events;
