({
  	recordChangeHandler : function(component, event) {
        console.log("recordChangeHandler");
        var id = event.getParam("recordId");
        component.set("v.recordId", id);
        var service = component.find("service");
        service.reloadRecord();
	},
    
  	propertyChangeHandler : function(component, event) {
        console.log("propertyChangeHandler");
        var property = component.get("v.property");
        var vfOrigin = component.get("v.vfOrigin");
        var vfWindow = component.find("vfFrame").getElement().contentWindow;
		vfWindow.postMessage(property, vfOrigin);
	}
})