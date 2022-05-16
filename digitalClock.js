console.log("Running");

let summaryMessage = document.getElementsByClassName("item1");
//console.log(summaryMessage[0])

/*let summaryMessage1 = document.getElementById("wakeup_time")
console.log(summaryMessage1.innerText)*/

const d = new Date();
document.getElementById("hours").innerHTML = d.getHours() + "<br>Hours";
document.getElementById("min").innerHTML = d.getMinutes() + "<br>Minutes";
document.getElementById("sec").innerHTML = d.getSeconds() + "<br>Seconds";

let h = d.getHours();

if (h >=12)
    document.getElementById("ampm").innerText = "PM";
else
    document.getElementById("ampm").innerText = "AM";

//let summaryMessage1 = document.getElementById("wakeUpTime").innerText;
//console.log(summaryMessage1);
//document.getElementById("summaryItem1").innerText = "Wake Up Time: " + summaryMessage1;



function displaySummary() {
    let summaryMessage1 = document.getElementById("wakeup_time").value;
    console.log(summaryMessage1);
    document.getElementById("summaryItem1").innerText = "Wake Up Time: " + summaryMessage1;

    let summaryMessage2 = document.getElementById("lunch_time").value;
    console.log(summaryMessage2);
    document.getElementById("summaryItem2").innerText = "Lunch Time: " + summaryMessage2;

    let summaryMessage3 = document.getElementById("nap_time").value;
    console.log(summaryMessage3);
    document.getElementById("summaryItem3").innerText = "Nap Time: " + summaryMessage3;

    let summaryMessage4 = document.getElementById("night_time").value;
    console.log(summaryMessage4);
    document.getElementById("summaryItem4").innerText = "Night Time: " + summaryMessage4;
    
}