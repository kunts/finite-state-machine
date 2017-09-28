class FSM {
  /**
   * Creates new FSM instance.
   * @param config
   */
  constructor(config) {
    try {
      if (config != null) {
        this.initial = config.initial;
        this.states = config.states;
        this.previous = [];
        this.undone = [];
        return this;
      } else {
        throw new Error()
      };
    } catch (error) {
      throw error;
    }
  }
  /**
   * Returns active state.
   * @returns {String}
   */
  getState() {
    return this.initial;
  }
  /**
   * Goes to specified state.
   * @param state
   */
  changeState(state) {
    try {
      var flag = false;
      for (var key in this.states) {
        if (key == state) {
          this.undone = [];
          this.previous.push(this.initial);
          this.initial = key;
          flag = true;
        }
      }
      if (flag === false) {
        throw new Error();
      }
    } catch (error) {
      throw error;
    }
  }
  /**
   * Changes state according to event transition rules.
   * @param event
   */
  trigger(event) {
    try {
      var flag = false;
      for (var key in this.states[this.initial]) {
        for (var key1 in this.states[this.initial][key]) {
          if (key1 == event) {
            this.undone = [];
            this.previous.push(this.initial);
            this.initial = this.states[this.initial][key][key1];
            flag = true;
          }
        }
      }
      if (flag == false) {
        throw new Error();
      }
    } catch (error) {
      throw error;
    }
  }
  /**
   * Resets FSM state to initial.
   */
  reset() {
    return this.initial = "normal";
  }
  /**
   * Returns an array of states for which there are specified event transition rules.
   * Returns all states if argument is undefined.
   * @param event
   * @returns {Array}
   */
  getStates(event) {
    var arr = [];
    if (event == null) {
      for (var key in this.states) {
        arr.push(key);
      }
    } else {
      for (var key in this.states) {
        for (var key1 in this.states[key]) {
          for (var key2 in this.states[key][key1]) {
            if (key2 == event) {
              arr.push(key);
            }
          }
        }
      }
    }
    return arr;
  }
  /**
   * Goes back to previous state.
   * Returns false if undo is not available.
   * @returns {Boolean}
   */
  undo() {
    if (this.previous.length == 0) {
      return false;
    } else {
      this.undone.push(this.initial);
      this.initial = this.previous.pop();
      return true;
    }
  }
  /**
   * Goes redo to state.
   * Returns false if redo is not available.
   * @returns {Boolean}
   */
  redo() {
    if (this.undone.length == 0) {
      return false;
    } else {
      this.previous.push(this.initial);
      this.initial = this.undone.pop();
      return true;
    }
  }
  /**
   * Clears transition history
   */
  clearHistory() {
    this.undone = [];
    this.previous = [];
  }
}
module.exports = FSM;
/** @Created by Uladzimir Halushka **/
