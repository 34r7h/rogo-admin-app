var adolfSrv = function($firebaseObject, $firebaseArray, Firebase){

    // data structure
    var service = {data:{},api:{},models:{}};

    // gather and prepare data
    var wordList = new Firebase('https://adolf.firebaseio.com/wordList');
    var text = new Firebase('https://adolf.firebaseio.com/text');
    var obj = $firebaseObject(wordList);
    var arr = $firebaseArray(wordList);
    var textObj = $firebaseObject(text);
    service.data.wordListObject = obj;
    service.data.wordListArray = arr;
    service.data.textObj = textObj;

    // define database methods
    service.api.wordSave = function(wordEntry){
        service.data.wordListArray.$add(wordEntry);
    };
    service.api.remove = function(id, arr){
        arr.$remove(id);
    };
    service.api.update = function(obj, val){
        obj.$save();
    };

    // define data model for new words

    // object to be injected in controller
    return service;
};

angular.module('rogoadmin').factory('service', adolfSrv);
