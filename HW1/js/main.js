console.log("Hello!  This is your javascript file."); 

fullLog = [ 
    {"journal": "today was a bad day"},
    {"sleep": 3},
    {"mood": ["Tired", "Angry"]}, 
    {"journal": "today was a good day"},
    {"sleep": 8}, 
    {"mood": ["Excited"]}
];

document.getElementById("fullLog").innerText = JSON.stringify(fullLog);

calculateAvgSleep();

document.getElementById("submitEntry").addEventListener("click", updateFullLog);

function updateFullLog() {
  fullLogText = "";

  fullLog.push({"journal": document.getElementById("journal").value})

  fullLog.push({"sleep": JSON.parse(document.getElementById("sleep").value)})

  moods = {"mood":[]}
  if (document.getElementById("mood1").checked) {moods["mood"].push(document.getElementById("mood1").value)};
  if (document.getElementById("mood2").checked) {moods["mood"].push(document.getElementById("mood2").value)};
  if (document.getElementById("mood3").checked) {moods["mood"].push(document.getElementById("mood3").value)};

  fullLog.push(moods);

  document.getElementById("fullLog").textContent = JSON.stringify(fullLog);

  calculateAvgSleep();
}

function calculateAvgSleep() {
    totalSleep = 0;
    avgSleep = 0;
    daysEntered = 0;

    for (let i = 0; i < fullLog.length; i++) {
        if (Object.keys(fullLog[i])[0] == "sleep"){
            totalSleep += fullLog[i].sleep;
            daysEntered++ ;
        }
    }

    avgSleep = totalSleep/daysEntered;

    document.getElementById("avgSleep").textContent = "Average Sleep Hours: " + avgSleep.toFixed(1);
}

