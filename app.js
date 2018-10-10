// BUDGET CONTROLLER
var budgetController = (function() {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }

  return {
    addItem: function(type, des, val){
      var newItem, ID;

      // create new ID
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

      // create new item based on 'inc' or 'exp' type
      if(type === 'exp') {
        new Item = new Expense(ID, des, val);
      } else if(type === 'inc'){
        new Item = new Income(ID, des, val);
      }
      // push into data structure
      data.allItems[type].push(newItem);

      // return new element
      return newItem;
    }
  };

}());


// UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function(){
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function(){
      return DOMstrings;
    }
  };
}());


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var setUpEventListeners = function(){
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
      if(event.keyCode === 13 || event.which === 13){
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function(){
    // 1. Get field input data
    var input = UICtrl.getInput();
    // 2, Add item to the budget controller
    // 3. Add items to UI
    // 4. Calculate the budget
    // 5. Display budget on UI
  };

  return {
    init: function(){
      console.log('Application has started');
      setUpEventListeners();
    }
  };

}(budgetController, UIController));

controller.init();






































//
