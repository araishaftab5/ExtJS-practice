Ext.define('ExtclassicApp.view.main.Gridwithcheckbox',{
    extend:'Ext.grid.Panel',
    xtype:'grid',
    title:'Grid with checkbox DEMO',
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
     id:'gridwithcheckbox',
     selModel:{//for checkbox
         injectCheckbox:'first',//in the first column only inject checkbox
         checkOnly:true,
         model:'SIMPLE',
         type:'checkboxmodel'
     },
     buttons:[
         {
             text:'Select All',
             handler:function(){
                 Ext.getCmp('gridwithcheckbox').getSelectionModel().selectAll();
             }
         },
         {
            text:'Deselect All',
            handler:function(){
                Ext.getCmp('gridwithcheckbox').getSelectionModel().deselectAll();
            }
        },
        {
            text:'Get selected data',
            handler:function(){
               var data= Ext.getCmp('gridwithcheckbox').getSelectionModel().getSelection();
            console.warn("data",data);//array consisting of selected data is returned
            }
        }
     ],
     //putting flex=1 on all coulmns will divide the whole
     //width into 3 equal parts
     height:300,
     width:400,

})