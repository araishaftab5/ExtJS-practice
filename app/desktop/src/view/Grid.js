Ext.define('ExtclassicApp.view.main.Grid',{
    extend:'Ext.grid.Panel',
    xtype:'grid',
    title:'Grid DEMO',
    store:[
        { name: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
		{ name: 'ModernWorf', email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
		{ name: 'Deanna',     email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
		{ name: 'Data',       email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ],//right now putting some fake data
     columns:[//3 columns
         {
             text:'Name',//name of row
             dataIndex:'name',//coming from store,name should be same as in store
             flex:1     
         },
         {
             text:'Email',
             dataIndex:'email',
             flex:1//putting this will make email field large
         },
         {
             text:'Phone',
             dataIndex:'phone',
             flex:1
         }
     ],
     //putting flex=1 on all coulmns will divide the whole
     //width into 3 equal parts
     height:300,
     width:400,

})