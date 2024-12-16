var display=document.getElementById("display"); //access the display from html
var sqr = false; //setting a flag for square function

//Function to display the numbers and operators
function displaynum(value)
{
    display.value+=value;
}

//Function to clear the display
function clearnum()
{
    display.value="";
    display.style.boxShadow = "";
}

//Function to delete the number
function delnum()
{
    display.value=display.value.slice(0,-1);
}

//Function to calculate the various operations
function calculate() {
    try {
        let result=eval(display.value);
        if (sqr) {
            result=result**2;
            sqr=false;
        }
        display.value=result;
        document.getElementById("message").innerText = "Calculation successful!";
    }catch(error){
        display.value="ERROR";
        sqr=false;
        document.getElementById("message").innerText = "Calculation Failed";
    
    }
}

//Function to find the square operator 
document.getElementById("square").addEventListener("click", function(){
    sqr = true;
});



    

