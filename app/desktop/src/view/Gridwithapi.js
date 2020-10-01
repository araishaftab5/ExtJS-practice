Ext.define('ExtclassicApp.view.main.Gridwithapi',{
    extend:'Ext.grid.Panel',
    xtype:'grid',
    title:'Grid with API DEMO',
    store:{type:'gridapistore'},
    controller:'extra',
    bbar:{    //for pagination
        xtype:'pagingtoolbar',
        displayInfo:true
    },
     columns:[//3 columns
         
         {
            text:'Name',//name of row
            dataIndex:'name',//coming from store,name should be same as in store
            flex:1,


            filter:{
                type:'string' //we can search any data on simple typing
            },


            // filter:{//list type of filter gives us a list by which we can filter data
              
            //    type:'list',
            //    options:["Leanne Graham","peter","bruce"]
            // },
            
            
            // filter:{
            //     type:'number'//to filter data on the basis of number like <,> or = to a number
            // }

            //in case of local filters no api is hitting , it doing filter locally
            //in remote filter it gets data from server side
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
         },
         {
            text:'Website',//name of row
            dataIndex:'website',//coming from store,name should be same as in store
            flex:1     
        },
        //  {
        //     text:'Website',
        //     dataIndex:'website',
        //     flex:1
        // }
     ],
     plugins:'gridfilters',
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