// https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json

//XML-HTTP Request
//are a way to interact with the servers via API

//XML-HTTP Request
//are a way to interact with the servers via API
//api is restcountries
//XML format
//Extended markup Language
//4 steps 

//step 01:create a XHR Object
//XHR objects are used to interact with servers via API
var request = new XMLHttpRequest();
//new is a inbuilt world,which creates an Object
//this initates a connection between client and server

//step 02:create a request/open a request
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//open is an inbuilt method
//open method consist of 2 parameters
//HTTPMETHOD,API-URL


//step 03:creating a bridge
request.send();

//step 04:status code for success : 200
//once the data successfully received from the server 
//the data travelling from ther server to client  will be of string
//onload is an action which will be triggered , once data is successfull
//function is a set of code to perform specific task
//here conversion of string to object is happening 
request.onload = function () {
    var result = JSON.parse(request.response);//object stored in result 

    console.log(result)
    var reg = result.filter((ele) => ele.region === "Asia")     // Countries in Asia Region
    var arr = []
    for (let i = 0; i < reg.length; i++) {

        arr.push(reg[i].name)

    }
    console.log(arr)


    var reg = result.filter((ele) => ele.population<200000)     // Countries with population < 200000
    var arr = []
    for (let i = 0; i < reg.length; i++) {

        arr.push(reg[i].name)

    }
    console.log(arr)


    
    function country(name, capital, flag){
        for(let i=0;i<result.length;i++){
            console.log(result[i].name, result[i].capital, result[i].flag)    // name capital and flags of countries
        }
        return name, capital, flag
    }
    result.forEach(country)

    var reg = result.filter((ele) => ele.currencies[0].code==='USD')     // Countries with USD as currency
    var arr = []
    for (let i = 0; i < reg.length; i++) {

        arr.push(reg[i].name)

    }
    console.log(arr)


}





