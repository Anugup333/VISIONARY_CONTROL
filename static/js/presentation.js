const video = document.getElementById("video");
    const statusText = document.getElementById("status");
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
      });
    function captureImage() {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      return canvas.toDataURL("image/jpeg");
    }
    function registerFace() {
      const name = document.getElementById("name").value.trim();
      if (!name) {
        alert("Please enter a name");
        return;
      }
      const image = captureImage();
      fetch("/presentation_register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, image })
      })
      .then(res => res.json())
      .then(data => {
        statusText.innerText = data.message;
        statusText.style.color = data.status === "success" ? "green" : "maroon";
        statusText.style.fontWeight = "bold";
      });
    }
    function loginFace() {
      const image = captureImage();
      fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image })
      })
      .then(res => res.json())
      .then(data => {
        statusText.innerText = data.message;
        statusText.style.color = data.status === "success" ? "green" : "maroon";
        statusText.style.fontWeight = "bold";
        if (data.status === "success"){
            setTimeout(() => {
            window.location.href = "/present";
          }, 1500);
        }
      });
    }