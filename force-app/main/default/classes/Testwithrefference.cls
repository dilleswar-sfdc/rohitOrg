Public Class Testwithrefference{
Account[] DataSelected;

public Account[] getselectAcct()
{
return DataSelected;
}

Public PageReference showall()
{
DataSelected=[select name,type,industry,fax,phone from account];
return null;
}

Public PageReference CustomerDirect()
{
DataSelected=[select name,type,industry,fax,phone from account where type='Customer - Direct'];
return null;
}




}