function App(n,m,s){
    //Declare your instance variables here.
    this.name=n;
    this.memory=m;
    this.state=s;
    //Declare the instance function open here.
    this.open = function(){
        this.state = "active";
    };
    //Declare the instance function sleep here.
    this.sleep = function(){
      if(this.state=="active"){
        this.state = "sleep";
        this.memory = this.memory/2;
      }
    };
    //Declare the instance function active here.
    this.active = function(){
      if(this.state=="sleep"){
        this.state = "active";
        this.memory = this.memory*2;
      }
    };
    //Declare the instance function close here.
    this.close = function(){
      if(this.state!=null){
        this.state = null;
        this.memory = 0;
      }
    };
}
//Use the constructor to create 4 App objects below.
var goodreader = new App("Goodreader",100,null);
var ibooks = new App("iBooks",500,null);
var showbie = new App("Showbie",2000,null);
var safari = new App("Safari",785,null);
//Declare an array named appList, and place all 4 of your apps in that array.
//The order does not matter.
var appList = [];
appList.push(goodreader);
appList.push(ibooks);
appList.push(showbie);
appList.push(safari);
//If I declare appList first and add "appList.push(this);" into the App
//constructor then I don't have to push each one into the app.
