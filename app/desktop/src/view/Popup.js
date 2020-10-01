Ext.define('ExtclassicApp.view.main.Popup',{
    extend:'Ext.grid.Panel',
    xtype:'grid',
    title:'Grid with popup DEMO',
    store:{type:'gridstore'},
    controller:'extra',
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
   id:'gridpopup',
     selModel:{//for checkbox
         injectCheckbox:'first',//in the first column only inject checkbox
         checkOnly:true,
         model:'SIMPLE',
         type:'checkboxmodel'
     },
     buttons:[
      
        {
            text:'Show Popup',
            handler:function(){
                pop=Ext.create('ExtclassicApp.view.main.Showpopup');
                pop.show();
                console.warn("abc");
            }
        }
     ],
     //putting flex=1 on all coulmns will divide the whole
     //width into 3 equal parts
     height:300,
     width:400,
    

})