({
	doInit : function(component, event, helper) {
        var cmp = document.getElementById("hi1");
        document.write(Date());
        alert(cmp);
		var action = component.get('c.insertAcc');
        
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
	}
})