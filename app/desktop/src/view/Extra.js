Ext.define('ExtclassicApp.view.main.Extra',{
    extend:'Ext.container.Container',
    xtype:'Extra',
    controller:'extra',
    viewModel: {
        type: 'mainviewmodel'
    },
    items:[
        {
            title:'Extra View',
            bind:
            {
                html:'{prop}'
            }
        },
        {
            xtype:'button',
            name:'click',
            text:'Call Controller',
            itemId:'callController'//this we will use to perform the operation
        },
        {
            xtype:'button',
            name:'click1',
            text:'Call Controller Twice',
            itemId:'another'//this we will use to perform the operation
        },
        

        

    ]
})