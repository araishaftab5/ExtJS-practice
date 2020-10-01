Ext.define('ExtclassicApp.model.Gridmodel',{
    extend:'Ext.data.Model',
    alias:'model.gridmodel',
    fields:[
        {name:'name', type:'int'},//type refers to type of data,if data is not an int ,it gives NaN(not a no)
        {email:'email'},
        {phone:'phone'}
    
    ]
})