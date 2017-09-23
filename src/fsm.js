class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        try {
            if (config!=null){
this.initial = config.initial;
this.states = config.states;
            return this;
            }
            else{throw new Error()};
        }
        catch(error) {

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
        for(var key in this.states){

            if (key == state){
            this.initial = state;
            flag = true;

        }

}

          if (flag == false){
            throw new Error()
          };
      }
      catch(error) {

          throw error;
      }


}
    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
      for(var key in this.states){

for(var key1 in this.states[key]){

for(var key2 in this.states[key][key1]){
  if(key2 == event){
    this.initial = this.states[key][key1][key2];
  }
}
}



}

    }

    /**
     * Resets FSM state to initial.
     */
    reset() {

    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
