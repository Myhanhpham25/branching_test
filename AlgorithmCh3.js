// Chapter 3 - Arrays

Array: Push Front 
function pushFront(arr, value){
	if (var i = arr.length ; i >= 0; i--){
		arr[i + 1] = arr[i];
	}
	arr[0] = value;	
}