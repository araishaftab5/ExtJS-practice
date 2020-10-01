Ext.application({
	extend: 'ExtclassicApp.Application',
	name: 'ExtclassicApp',
	requires:[
		'ExtclassicApp.*',
		'Ext.container.Viewport',
	],
	// launch: function() {
	// 	viewport=Ext.getCmp('viewport');
	// 	target=viewport.down('#viewport-target'),
	// 	view=Ext.create('ExtclassicApp.view.main.Gridwithapi'),
	// 	target.add(view)
	// },
	mainView:'ExtclassicApp.view.main.Popup',
	//autoCreateViewport: true
});
