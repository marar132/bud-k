function setAlarm() {
  const alarmDateTimeInput = document.getElementById('alarmDateTime');
  const alarmDateTime = new Date(alarmDateTimeInput.value);

  const alarmSound = document.getElementById('alarmSound'); // Get the audio element

  const checkAlarm = () => {
    const now = new Date();
    if (now >= alarmDateTime) {
      //alert('Wake up!'); 
      clearInterval(interval);
      removeAlarm(alarmContainer, alarmDiv, interval);

      // Show the stop button
      const stopButton = document.createElement('button');
      stopButton.innerText = 'Stop Alarm';
      stopButton.addEventListener('click', () => {
        alarmSound.pause(); 
        alarmSound.currentTime = 0; 
        alarmContainer.removeChild(stopButton);
        //put vibration stop here when you got it
      });
      alarmContainer.appendChild(stopButton);

      // Play the alarm sound
      alarmSound.play();
      // put vibration START here when you got it
      
    }
  };

  const alarmContainer = document.getElementById('alarmContainer');
  const alarmDiv = document.createElement('div');
  const alarmTime = document.createTextNode(alarmDateTime.toLocaleTimeString());
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete Alarm';
  deleteButton.addEventListener('click', () => removeAlarm(alarmContainer, alarmDiv, interval));

  alarmDiv.appendChild(alarmTime);
  alarmDiv.appendChild(deleteButton);
  alarmContainer.appendChild(alarmDiv);

  const interval = setInterval(checkAlarm, 1000);
}

function removeAlarm(container, alarmDiv, interval) {
  clearInterval(interval);
  container.removeChild(alarmDiv);
}
