public with sharing class LightningSecurity {
    
    @AuraEnabled
    public static Account insertAcc(){
        List<Account> lacc = [select id,name,billingstreet,accountnumber from account];
        Account acc = new Account();
        acc.Name = 'testAcc';
        insert acc;
        return acc;
    }

}
