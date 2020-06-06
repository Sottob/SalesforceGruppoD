({
    init: function(cmp, event, helper) {

        var action = cmp.get('c.getConferenza');
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                console.log(response.getReturnValue())
                var body = response.getReturnValue()
                var lista = []
                body.forEach(element => {
                    var location = element.Luogo__r
                    lista.push({
                        location: {
                            Street: location.Indirizzo__c,
                            City: location.Citta__c,
                            State: location.Stato__c

                        },
                        title: element.Name,
                        description: 'Conference'
                    })
                });

                cmp.set('v.mapMarkers', lista);
            }
            console.log("fuori success")

        });

        $A.enqueueAction(action);
    }
});