Public Class TestList
{
  List<Account> acts =[select name,type,industry,fax,phone from account where industry='energy'];
  
  Public List<Account> Getacts()
  {
        return acts;
  }
}