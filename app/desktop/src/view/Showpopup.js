Ext.define('ExtclassicApp.view.main.Showpopup',{   //kind of a grid popup
    extend:'Ext.window.Window',
    width: 500,
            height: 200,
            layout: 'hbox',
            items: [
                {
                    xtype: 'combo',
                    width: 100,
                    valueField: 'id',
                    displayField: 'name',
                    store: new Ext.data.SimpleStore({
                        autoDestroy: true,
                        fields: ['id', 'name'],
                        data: [[1, 'a'], [2, 'b'], [3, 'c']]
                    }),
                    editable: false,
                    forceSelection: true,
                    queryMode: 'local',
                    triggerAction: 'all',
		        }
          ]
    
})