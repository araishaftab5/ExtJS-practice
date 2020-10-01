Ext.define('ExtclassicApp.store.Gridapistore',{
   extend:'Ext.data.Store',
   alias:'store.gridapistore',
   remoteFilter:true,//for every filter hit will go to server end
   pageSize:1,
   proxy:{
       type:'ajax',
       url:'https://jsonplaceholder.typicode.com/users'//dummy api url 
   },
// proxy:{
//    type : 'rest',
//       actionMethods : {
//          read : 'GET'  // Get or Post type based on requirement
//       },
//       url : 'http://localhost:8080/rest/users/all', // here we have to include the rest URL path 
//       // which fetches data from database or Json file path where the data is stored
//       reader: {
//          type : 'json',  // the type of data which is fetched is of JSON type
//          rootProperty : 'data'
//       },
//       },
   autoLoad:true,//if we dont provide autoload api call will not work
})