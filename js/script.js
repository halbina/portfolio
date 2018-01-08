


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var e = document.forms["myForm"]["pwd"].value;
    var m = document.forms["myForm"]["msg"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (e == "") {
    	alert("Email must be filled out");
    	return false;
    }
    else if(m == "") {
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