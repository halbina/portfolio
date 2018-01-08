

function validateForm() {
    var n = document.forms["myForm"]["fname"].value;
    var em = document.forms["myForm"]["pwd"].value;
    var ms = document.forms["myForm"]["msg"].value;
    if (n == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (em == "") {
    	alert("Email must be filled out");
    	return false;
    }
    else if(ms == "") {
    	alert("Please leave me a message ... ");
    	return false;
    }


}

$(document).ready( function() {



$("#img1, #img2").mouseenter(function(){
    $(this).animate({
        center: '250px',
        opacity: '1.0',
        height: '550px',
        width: '650px'
    });
}); 

$("#img1, #img2").mouseleave(function(){
    $(this).animate({
        
        height: '380px',
        width: '600px'
    });
}); 

});