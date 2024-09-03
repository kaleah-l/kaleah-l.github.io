//Author: Kaleah Leisher 
//Date: 9/2/24
function arrayWork()
{
    //Creating array and sum variable
    var array = [];
    sum = 0;
    
    //Creating random integers to fill the array
    for (var i=0; i<5; i++){
        var val = Math.floor( Math.random()*100 );
        sum += val
        array.push(val);
    }

    //Calculating mean
    var mean = sum/array.length;

    //Outputting mean for debugging
    console.log(mean);

    //Creating and filling an array of elements that were grater than the mean
    var greater = [];
    for (var i=0; i<5; i++){
        if (array[i]>mean){
            greater.push(array[i]);
        }
    } 
    //Displaying information
    document.querySelector("#arrayOut").innerHTML="The array is:"+array+"<br>The mean is:"+mean+"<br>Greater:"+greater;
}