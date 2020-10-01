Ext.define('ExtclassicApp.view.Viewport',{
    extend:'Ext.container.Viewport',
    id:'viewport',
    items:[
        {
            region:'north',
            html:'<h1>viewport finally done</h1>'
        },
        {
            region:'center',
            xtype:'tabpanel',
            activeTab:0,
            itemId:'viewport-target'
        },
        {
            region:'south',
            html:'<h1>viewport footer finally done</h1>'
        },
    ]
})