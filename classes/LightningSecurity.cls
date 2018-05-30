public with sharing class LightningSecurity {
    
    @AuraEnabled
    public static Account insertAcc(){
        Account acc = new Account();
        acc.Name = 'testAcc';
        insert acc;
        return acc;
    }

}