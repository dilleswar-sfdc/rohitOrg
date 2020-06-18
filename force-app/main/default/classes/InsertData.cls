Public Class InsertData
{
 Account a = new Account();
 
 Public Account GetAccountData()
 {
 return a;
 }
 
 Public PageReference save()
 {
   insert a;
   return null;
 }

}