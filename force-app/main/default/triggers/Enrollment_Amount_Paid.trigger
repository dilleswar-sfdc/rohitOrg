trigger Enrollment_Amount_Paid on Enrollment__c (before insert,before update) {
    for(Enrollment__c e: Trigger.new){
       Course__c cr;
       Discount__c dc;
        
        cr=[select id,name,Course_Cost__c from course__c where id=:e.Course_Enrolled_In__c ];
        
        dc=[select id,name,	Discount_Percentage__c from Discount__c where id=:e.Discount_Code_Used__c ];
        
        e.Amount_Paid__c=(((100-dc.Discount_Percentage__c)/100)*cr.Course_Cost__c);
    }
}