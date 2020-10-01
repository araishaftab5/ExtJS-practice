Ext.define('ExtclassicApp.view.main.ExtraController',{
    extend:'Ext.app.ViewController',
    alias:'controller.extra',
    init:function(){
        this.control({
             '#callController':{
                  click:'callOnClick'//function callOnClick
             },
             '#another':{
                 click:'callTwice'
             }
        })//wat kind of event or where we want to access this controller
        //on behalf of callController id  I want to perform some operation
    },  //if we want to do something on initialization
    callOnClick:function(){
        alert("hello from the controller I just made")
    },
    callTwice:function(){
        alert("hello from second button")
    }
})