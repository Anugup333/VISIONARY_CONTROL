function setBackground() {
           // Fullscreen background set karna
            document.body.style.backgroundImage = "url('../static/visionary_control_logo.png')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";
        }
function expandModule(element, bgImage, title, description,moduleType,statusId) {
            document.getElementById('mainContent').classList.add('hidden-module'); 
            let fullscreenModule = document.getElementById('fullscreenModule');
            fullscreenModule.style.backgroundImage = `url('../static/${bgImage}')`;
            document.getElementById('moduleTitle').textContent = title;
            document.getElementById('moduleDescription').textContent = description;
            document.getElementById('statusId').textContent=statusId;
            fullscreenModule.classList.remove('hidden-module');
            

            let buttonContainer = document.getElementById('buttonContainer');
            buttonContainer.innerHTML = ''; // Clear previous buttons
           

            let startBtn = document.createElement('button');
            startBtn.className = "px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-700 text-lg m-3";
            startBtn.textContent = "▶ Start";
           
      
            let stopBtn = document.createElement('button');
            stopBtn.className = "px-6 py-4 bg-red-500 text-white rounded-lg hover:bg-red-700 text-lg m-3";
            stopBtn.textContent = "⏹ Stop";

            
            if (moduleType === 'presentation') {

                // startBtn.onclick = () => startModule('module1', 'statusId');
                // stopBtn.onclick = () => stopModule('module1', 'statusId');
            } else if (moduleType === 'video') {
                startBtn.onclick = () => startModule('module2', 'statusId');
                stopBtn.onclick = () => stopModule('module2', 'statusId');
            } else if (moduleType === 'attendance') {
                //startBtn.onclick = () => startModule('module3', 'statusId');
                //stopBtn.onclick = () => stopModule('module3', 'statusId');
                
            }
            
            buttonContainer.appendChild(startBtn);
            buttonContainer.appendChild(stopBtn);
            
      
        }


function goHome() {
             document.getElementById('fullscreenModule').classList.add('hidden-module');
            document.getElementById('mainContent').classList.remove('hidden-module'); 
              // Reset background to original gradient
          document.body.style.background = "linear-gradient(to right, #9333ea, #2563eb, #10b981)"; // Original background gradient
         
        }
function startModule(module, statusId) {
    fetch(`/start/${module}`)
        .then(response => response.json())
        .then(data => {
        if (data.status === "started") {
                document.getElementById(statusId).innerText = "Current Module is in Running....";
                document.getElementById(statusId).style="font-size:large; font-weight:bold; color:darkgreen";
                
                      
            }
        });
    }

function stopModule(module, statusId) {
            fetch(`/stop/${module}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === "stopped") {
                        document.getElementById(statusId).innerText = "Now Module is Successfully Stopped....";
                        document.getElementById(statusId).style="font-size:large; font-weight:bold; color:rgba(174, 20, 15, 0.925)";
                   
                    }
                });
        }