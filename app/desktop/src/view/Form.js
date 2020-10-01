Ext.define('ExtclassicApp.view.main.Form',{
    extend:'Ext.form.Panel',
    title:'Form Tutorial',
    defaultType:'textfield',
    items:[
        {
            fieldLabel:'First Name',
            name:'firstName',
        },
        {
            fieldLabel:'Last Name',
            name:'lastName',
        },
        {
            fieldLabel:'Email',
            name:'email',
        },
        {
            xtype:'datefield',//for datepicker
            fieldLabel:'DOB',
            name:'dob',
        },
       
    ],
    buttons:[
        {
          text:'Submit me',
          handler:function(btn){ //btn parameter because we require it
              var data=this.up('form');
              console.warn("print form data",data.getForm().getValues())
        }
    }
    ]
})