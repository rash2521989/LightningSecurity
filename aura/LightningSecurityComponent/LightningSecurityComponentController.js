({
	doInit : function(component, event, helper) {
        var cmp = document.getElementById("demo");
        alert(cmp);
        console.log(cmp);
        document.getElementById("demo").innerHTML = "Iframe is loaded."; 
        window.top.postMessage( '*');
      window.onload = function(){window.location.href= "https://www.w3schools.com";}
		var action = component.get('c.insertAcc');
        //alert(event.getParam("message"));
        action.setCallback(this,function(response){
        	var state = response.getState();
        	if(state == 'SUCCESS'){
                 component.set("v.acc",response.getReturnValue());
            }
        	else{
            	console.log('*** problem getting the account '+response.getReturnValue());
                alert('*** hey **');
        	}
        });
    	$A.enqueueAction(action);
	},
    

   
    sampleComponentEventhandler : function(component, event, helper) {
        var product = event.getParam("message");
        alert('product'+product);
    }

})
