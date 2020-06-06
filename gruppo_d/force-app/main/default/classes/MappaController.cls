public with sharing class MappaController {
    @AuraEnabled
    public static List<Conferenza__c> getConferenza() {
        return [SELECT Name, Luogo__r.Citta__c, Luogo__r.Stato__c, Luogo__r.Indirizzo__c FROM Conferenza__c ];
    }

}
