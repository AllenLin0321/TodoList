// check off Specific Todos By Clicking

$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click","span",function(event){
    //span.parent() -> li
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    // stop bubbling up
    event.stopPropagation();
    
});

$("#input").keypress(function(event){
    if(event.which===13){
        var todoText = $(this).val();
        $("ul").append("<li><span>X </span>"+todoText+"</li>");
        $(this).val("");
    }
});