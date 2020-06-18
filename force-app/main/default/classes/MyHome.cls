public class MyHome {
    @AuraEnabled
    public static List<Account> GetUser()
    {
        List<Account> act = [select phone,name from Account where name ='CodeTest1'];
        return act;
    }
    
}