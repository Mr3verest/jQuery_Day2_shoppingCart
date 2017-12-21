
var price= [55,20,67];
var itemCounter= [0,0,0];
var itemTotalPrice= [0,0,0];

var subTotal= 0;
var shipping= 0;
var tax= 0;
var discount= 0;
var total = 0;


$("button.add").click(function(){
	itemCounter[$(this).attr("value")]++;
	console.log(itemCounter);
	
});
$("button.remove").click(function(){
	if(itemCounter[$(this).attr("value")] > 0){
		itemCounter[$(this).attr("value")]--;
	}
	console.log(itemCounter);
	
});
$("button.removeAll").click(function(){
	itemCounter[$(this).attr("value")] = 0;
	console.log(itemCounter);

});


$("button").click(function(){
	

	x= Number($(this).attr("value"));
	if(itemCounter[x]==0){
		$("#itemCon"+x).css("display","none");
	}else{
		$("#itemCon"+x).css("display","block");
	}
	itemTotalPrice[x]= itemCounter[x]*price[x];
	$("#item"+x).html(itemTotalPrice[x]);
	
	subTotal= 0;
	for(var i= 0; i<itemTotalPrice.length; i++){
		subTotal+= itemTotalPrice[i];
	}
	$("#subTotal").html(subTotal);

})

$("#cart").draggable();