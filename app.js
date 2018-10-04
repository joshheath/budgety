
// BUDGET CONTROLLER
var budgetController = (function() {


}());


// UI CONTROLLER
var UIController = (function() {

  return {
    getInput: function(){
      return {
        type: document.querySelector('.add__type').value,
        description: document.querySelector('.add__description').value,
        value: document.querySelector('.add__value').value
      };
    }
  };

}());


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function(){
    // 1. Get field input data
    var input = UIController.getInput();
    console.log(input);
    // 2, Add item to the budget controller
    // 3. Add items to UI
    // 4. Calculate the budget
    // 5. Display budget on UI
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }
  })

}(budgetController, UIController));





































//
