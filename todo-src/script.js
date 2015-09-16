var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){

	// Default to-do's
	$scope.todos = ["Learn AngularJS", "Learn NodeJS", "Walk Dog", "Take Shower"];
	$scope.newItem = "";
	$scope.priority= '';
	
	// Array of completed to-do items (displayed in "Completed Items" section)
	$scope.completedItems = ["Brush my Teeth"];
	
	$scope.priorities=["Medium Priority","Medium Priority","Medium Priority", "High Priority"];
	
	//Creating the variable for editing items.
	//$scope.editing is necessary to have angular know it needs to update the input.
	$scope.editing = {};
	$scope.editing.editedItem = "";
	
		
	
	// "Add Item" Function
	$scope.addItem = function(){
		console.log("in add");
		if ($scope.newItem !== ""){
			$scope.todos.push($scope.newItem);
			$scope.newItem = "";
		}
	
  //Setting item priority level
		$scope.priority = $('#select').val();
		//alert( $scope.priority);
		if($scope.priority==="Low"){
			$scope.priority='Low Priority';
		}
		if($scope.priority !=="Low Priority" && $scope.priority !=="Normal Priority" && $scope.priority !=="High Priority" ){
			$scope.priority='Low Priority';
		}
		if ($scope.priority !== ""){
			if($scope.priority === 'Low Priority'){
				$scope.priorities.push("Low Priority");
				$scope.priority = "";
			} else if($scope.priority === 'Normal Priority'){
				$scope.priorities.push($scope.priority);
				$scope.priority = "";
			} else if ($scope.priority === 'High Priority'){
				$scope.priorities.push("High Priority");
				$scope.priority = "";
			}
		}
	}
	
	// "Delete Item" Function
	$scope.deleteItem = function(item){
		console.log("in delete");
		var index = $scope.todos.indexOf(item);
		$scope.todos.splice(index, 1);
		$scope.priorities.splice(index, 1);
	}
	
	// This function will edit an item.
	$scope.editItem = function(item){
		console.log("in edit");
		var index = $scope.todos.indexOf(item);
	
		//Creates arrays of all the items in the list, and the
		//inputs for future reference.
		$scope.currentInput = document.getElementsByClassName("visible");
		$scope.finalInput = document.getElementsByClassName("input-group");
	
		//If there isn't currently anything being edited,
		//make the item invisible and the input visible.
		if ($scope.editing.editedItem == ""){
			$scope.editing.editedItem = $scope.todos[index];
			$scope.currentInput[index].style['display'] = 'none';
			$scope.finalInput[index+1].style['display'] = 'inline-flex';
		} 
		//Else, apply the edit, make the item visible, and the input invisible.
		else{  
			$scope.todos[index] = $scope.editing.editedItem;
			$scope.editing.editedItem = "";
			$scope.finalInput[index+1].style['display'] = 'none';
			$scope.currentInput[index].style['display'] = 'inline-flex';
		}
	}
	
	$scope.markComplete = function(item) {
		console.log("in complete");
		$scope.completedItems.push(item);
		$scope.deleteItem(item);
	}
	
    //Function to clear items that have been designated complete
    $scope.clearCompleted = function(){
        console.log("in clearCompleted");
        for (var index in $scope.completedItems) //go through the array 
        {
            $scope.completedItems.splice(0, $scope.completedItems.length);
        }
    }
	
});

/*************************
* Homework (not rly):
* - button to mark item as "complete"
* - have a total number of items at the top
* - make it prettier
* - add a due date
* - add reminder (setInterval)
* 
* *********************/
