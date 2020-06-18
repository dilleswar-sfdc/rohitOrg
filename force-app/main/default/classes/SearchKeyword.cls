Public class SearchKeyword
{
 String keyword;
 
 List<Account> acct;
 List<List <sObject>> searchList;
 Public String getKeyword()
 {
   return keyword;
 }  
 
 Public List<Account> getAccountList()
 {
 return acct;
 }
 
 Public void setKeyword(String s)
 {
   keyword=s;
 }  
 
 Public PageReference BindAccount()
 {
 searchList= [FIND :keyword RETURNING Account(Name,Industry,Type,Phone,Fax)];
 acct=((List<Account>)searchList[0]);
 return null;   
 }
}