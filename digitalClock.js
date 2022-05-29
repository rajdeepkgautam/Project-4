console.log("Running");
var a = true;

let summaryMessage = document.getElementsByClassName("item1");
//console.log(summaryMessage[0])

/*let summaryMessage1 = document.getElementById("wakeup_time")
console.log(summaryMessage1.innerText)*/

const d = new Date();             //New Date Func Using

let h = d.getHours();
if (h >=12) {
    h = (h > 12 ) ? h-12 : h ;
    document.getElementById("ampm").innerText = "PM"; 
    h = ((h-12)<10 && h-12!==0) ? "0" + h : h;
    var Hour = h + "PM";
    console.log(Hour);

}
else {
    h = h<10 ? "0" + h : h;
    document.getElementById("ampm").innerText = "AM";
    var Hour = h + "AM";
    console.log(Hour);
}

//h = ((h - 12) < 10 ) ? "0" + h : h;
console.log(h);

document.getElementById("hours").innerHTML = h + "<br>Hours";
document.getElementById("min").innerHTML = d.getMinutes() + "<br>Minutes";
document.getElementById("sec").innerHTML = d.getSeconds() + "<br>Seconds";







//let summaryMessage1 = document.getElementById("wakeUpTime").innerText;
//console.log(summaryMessage1);
//document.getElementById("summaryItem1").innerText = "Wake Up Time: " + summaryMessage1;



function displaySummary() {

    let summaryMessage1 = document.getElementById("wakeup_time").value;
    console.log(summaryMessage1);
    document.getElementById("summaryItem1").innerText = "Wake Up Time: " + summaryMessage1;
    
    var H1 = summaryMessage1.split(" ");

    if(Hour == H1[0]){
        console.log("I am in 1st Block")
        let Message1 = document.getElementById("Message1");
        console.log(Message1);
        Message1.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
        console.log(Message1);

        let Message3greet = document.getElementById("greetMessage");
        Message3greet.innerText = "GOOD MORNING!! WAKE UP !!"
    
    }





    let summaryMessage2 = document.getElementById("lunch_time").value;
    console.log(summaryMessage2);
    document.getElementById("summaryItem2").innerText = "Lunch Time: " + summaryMessage2;
    
    var H1 = summaryMessage2.split(" ");

    if(Hour == H1[0]){
        console.log("I am in 2nd Block")
        let Message2 = document.getElementById("Message1");
        console.log(Message2);
        Message2.innerText = "LET'S HAVE SOME LUNCH !!!";
        console.log(Message1);

        let Message3greet = document.getElementById("greetMessage");
        Message3greet.innerText = "GOOD AFTERNOON!!! TAKE SOME SLEEP"
    
    }






    let summaryMessage3 = document.getElementById("nap_time").value;
    console.log(summaryMessage3);
    document.getElementById("summaryItem3").innerText = "Nap Time: " + summaryMessage3;

    console.log(typeof summaryMessage3)

   //var H1 = summaryMessage3.match(/\d+/g);
    var H1 = summaryMessage3.split(" ");
    console.log(H1[0]);
    console.log(typeof H1[0]);
    console.log(typeof h); 

    if(Hour == H1[0]){
        console.log("I am in 3rd Block")
        let Message3 = document.getElementById("Message1");
        console.log(Message3);
        Message3.innerText = "STOP YAWNING, GET SOME TEA, ITS JUST EVENING!";
        console.log(Message1);

        let Message3greet = document.getElementById("greetMessage");
        Message3greet.innerText = "GOOD EVENING!!!"
    
    }


    let summaryMessage4 = document.getElementById("night_time").value;
    console.log(summaryMessage4);
    document.getElementById("summaryItem4").innerText = "Night Time: " + summaryMessage4;

    var H1 = summaryMessage4.split(" ");

    if(Hour == H1[0]){
        console.log("I am in 4th Block")
        let Message4 = document.getElementById("Message1");
        console.log(Message4);
        Message4.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
        console.log(Message1);

        let Message3greet = document.getElementById("greetMessage");
        Message3greet.innerText = "GOOD NIGHT!"

       // document.getElementById("image").src = "./goodnight_image.png"
       document.getElementById("image").style.backgroundImage = "url('./Component32-1.svg')";
    }


    
    
}
//let summaryMessage1 = document.getElementById("wakeup_time").value;
//console.log(summaryMessage1);


