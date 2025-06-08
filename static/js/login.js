const video = document.getElementById("video");
const statusText = document.getElementById("status");

navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
      });

function captureAndLogin() {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      const imageData = canvas.toDataURL("image/jpeg");

      fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageData })
      })
      .then(res => res.json())
      .then(data => {
        statusText.innerText = data.message;
        statusText.style.color = data.status === "success" ? "green" : "maroon";

        if (data.status === "success") {
          setTimeout(() => {
            window.location.href = "/present";  // We'll build this next
          }, 1500);
        }
      });
    }