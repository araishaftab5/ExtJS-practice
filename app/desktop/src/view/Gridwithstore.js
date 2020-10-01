Ext.define('ExtclassicApp.view.main.Gridwithstore',{
    extend:'Ext.grid.Panel',
    xtype:'grid',
    title:'Grid DEMO',
    store:{type:'gridstore'},
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