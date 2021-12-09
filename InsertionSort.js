// Insertion sort
function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var mark = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > mark){
            console.log("In", i, j);
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j+1] = mark;
    }
    return arr;
}

var previous = "previous";

function myFunction() {
    var arry = document.getElementById("input1").value;
    console.log(arry);
    if (arry == previous){
        return null;
    }
    previous = arry;
    if (arry == ""){
        arry = "Please enter a valid sequence."
    }
    else {
        arry = arry.split(",");
        for (var i = 0; i < arry.length; i++){
            arry[i] = parseInt(arry[i])
        }
        arry = insertionSort(arry);
        arry = arry.toString();
    }
    document.getElementById("return").innerHTML += arry;
    document.getElementById("return").innerHTML += "<br>____________________________________________________<br><br>";
  }


