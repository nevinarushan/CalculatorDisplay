
var clickableArray=[];
var unclickableArray=["=","DEL","AC"]

//make sure what when we click = C AC and DEL it dosnt come on text 
function unclickable(value){

    return unclickableArray.indexOf(value.trim()) !== -1;
}


//The clickable part
$(document).ready(function(){
    $(".btn").click(function(){

        let button=$(this);
        let buttonText=button.text().trim();

       
        
        button.addClass("pressed");

        setTimeout(function() {
        button.removeClass("pressed");
        }, 100);
        //show on screen 

        if(unclickable(buttonText)){
        
           unclickableFunction(buttonText);
            //return false;
        }
        else{
            clickableArray.push(buttonText);
            $(".display").text(clickableArray.join(""));
        }
    });
});


function unclickableFunction(sign){
    if(sign==="="){
        
    }
    else if (sign ==="AC"){
        
        while (clickableArray.length > 0) {
            clickableArray.pop();
        }
        $(".display").text('');
    }
    else if(sign === "DEL"){
        clickableArray.pop();
        $(".display").text(clickableArray.join(""));
    }
}