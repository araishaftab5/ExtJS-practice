Ext.define('ExtclassicApp.store.Gridstore',{
    extend:'Ext.data.Store',
    alias:'store.gridstore',
    model:'ExtclassicApp.model.Gridmodel',
    data:{
        items:[
            { name: 'Araish', email: 'araishaftab5@gmail.com', phone: '9430990025'},
            { name:'Ariz Aftab', email: 'arizaftab4@gmail.com', phone:'876578965' },
            { name:'Zebaish', email:'zeb13@gmail.com', phone:'98754356677'}
        ]
    },
    proxy:{
        type:'memory',//type of proxy
        reader:{
            type:'json',//type of data we are using
            rootProperty:'items'//items is the property in the data object see line 5
        }
    }
})