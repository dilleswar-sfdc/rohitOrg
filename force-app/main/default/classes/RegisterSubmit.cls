public class RegisterSubmit {

    @AuraEnabled
    public static String RegistrationJson()
    {
        StaticResource static_res;
        String res_json_body;
        String CurrentLanguage=UserInfo.getLanguage();
        System.debug(' ::::: ' + CurrentLanguage) ;
            if(CurrentLanguage=='es')
            {
            
            static_res = [SELECT Id, SystemModStamp,Name FROM StaticResource WHERE Name = 'Registration_Es' LIMIT 1];
            }
            else
            {
                static_res = [SELECT Id, SystemModStamp,Name FROM StaticResource WHERE Name = 'Registration_En' LIMIT 1];
            }
            String url_file_ref = '/resource/'
            + String.valueOf(((DateTime)static_res.get('SystemModStamp')).getTime())
            + '/'
            + static_res.get('Name');
            system.debug('StaticResource'+ static_res.get('Name'));
            system.debug('filepath'+ url_file_ref);

            PageReference file_ref = new PageReference(url_file_ref);
        		
        	system.debug('RefPath: '+ file_ref);
            res_json_body = file_ref.getContent().toString();
			system.debug('file Content ' + res_json_body);  
        	return res_json_body;
    }
    
    @AuraEnabled
    public static Id SaveregisterDetails(Registration_Form__c regForm)
    {
        insert regForm;
        return regForm.id;
    }
    
     public static Id SaveEducationalDetails(Educational_Detail__c EduForm)
    {
        insert EduForm;
        return EduForm.id;
    }
}