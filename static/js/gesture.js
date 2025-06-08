const video = document.getElementById('video');
const slide = document.getElementById('slide');
const statusText = document.getElementById('status');
const gestureLabel = document.getElementById('gesture');

    let faceVerified = false;
    let currentSlide = 1;
    let gestureCooldown = false;
    let gestureTimeout;
    let totalSlides = 10;

    fetch('/slide_count')
      .then(res => res.json())
      .then(data => {
        totalSlides = data.total;
        console.log("Total slides detected:", totalSlides);
      });

    const camera = new Camera(video, {
      onFrame: async () => {
        await hands.send({ image: video });
      },
      width: 640,
      height: 480
    });
    camera.start();

    function stopPresentation(){
      alert("Process Stopped Successfully!");
      window.location.href = stopPresentationUrl;
    }

    async function verifyFaceLoop() {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      const imageData = canvas.toDataURL('image/png');

      const res = await fetch('/verify_face', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageData })
      });

      const result = await res.json();
      faceVerified = result.match;
      statusText.textContent = faceVerified ? "✅ Face verified - gestures enabled" : "🔒 Face mismatch - gestures blocked";
    }
    setInterval(verifyFaceLoop, 3000);

    function showSlide(n) {
      slide.src = `/static/slides/Slide${n}.png`;
    }

    function nextSlide() {
      if (currentSlide < totalSlides) {
        currentSlide++;
        showSlide(currentSlide);
        console.log("Next slide:", currentSlide);
      }
    }

    function prevSlide() {
      if (currentSlide > 1) {
        currentSlide--;
        showSlide(currentSlide);
        console.log("Previous slide:", currentSlide);
      }
    }

    function countFingers(landmarks) {
      const tips = [8, 12, 16, 20];
      let count = 0;
      for (let i = 0; i < tips.length; i++) {
        if (landmarks[tips[i]].y < landmarks[tips[i] - 2].y) {
          count++;
        }
      }
      return count;
    }

    function detectGesture(landmarks) {
      if (!faceVerified) return;

      showGesture("Hand Detected");

      if (gestureCooldown) return;

      const fingerCount = countFingers(landmarks);
      console.log("Finger count:", fingerCount);

      if (fingerCount === 1) {
        nextSlide();
        gestureCooldown = true;
      } else if (fingerCount === 2) {
        prevSlide();
        gestureCooldown = true;
      }

      if (gestureCooldown) {
        setTimeout(() => gestureCooldown = false, 1500);
      }
    }

    function showGesture(text) {
      gestureLabel.textContent = text;
      gestureLabel.style.display = 'block';

      if (gestureTimeout) clearTimeout(gestureTimeout);
      gestureTimeout = setTimeout(() => {
        gestureLabel.style.display = 'none';
      }, 1500);
    }

    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6
    });

    hands.onResults(results => {
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        detectGesture(results.multiHandLandmarks[0]);
      } else {
        gestureLabel.style.display = 'none';
      }
    });