INTRODUCTION: 

Visionary Control is a smart, gesture-based control system that enables users to interact with digital media and presentation tools using intuitive hand gestures. It is a unified platform that improves human-computer interaction by providing touchless control through real-time gesture recognition. The system utilizes computer vision and hand tracking technologies to allow seamless operation of presentations and media players without physical contact, making it especially suited for classrooms, seminars, and professional environments.


PURPOSE :

The purpose of this project is to develop an intelligent, gesture and vision-based interface system—Visionary Control—which enhances human-computer interaction by replacing conventional input devices with intuitive, contactless control mechanisms. The system is designed to facilitate seamless interaction with two key digital functions: Presentation control secured by face-based login and Media player Control through gesture recognition. By integrating computer vision and facial authentication, the project ensures secure access, hands-free operation, and modernized engagement, especially within academic and professional environments. The goal is to improve accessibility, reduce reliance on hardware, and promote automation in user interaction.

 TOOLS USED

1.	IDE:  VS Code
2.	Dataset Handling:  OpenCV, mediapipe, Pickle
3.	Libraries: OpenCV, MediaPipe, NumPy, Flask, face_recognition, pyautogui
4.	GUI: HTML + Tailwind CSS + JavaScript
5.	Backend: Python (Flask)

It comprises two core modules: 

1.	Presentation Control using hand gesture and integrate with Face-Based Login for authentication


The Presentation Control Module enables users to control slides, navigate content, and even draw on the screen using predefined hand gestures. This module is uniquely integrated with a Face-Based Login and Registration System, which ensures that only authenticated users can access the presentation control features. Users must register their face once, after which their identity is verified before they are granted access—providing a secure and personalized experience.

FLOW CHART OF PRESENTATION CONTROL

![image](https://github.com/user-attachments/assets/ed5692ea-5f84-47af-a1de-5a232fbbae53)

ACTUAL INTERFACE:- This is User Interface of VisionaryControl

![image](https://github.com/user-attachments/assets/68912674-a79a-468f-a196-3c13ec21fc3d)


 Now Click on Presentation Control (This is Interface of Presentation Control)

![image](https://github.com/user-attachments/assets/223c6e91-637a-45e1-9e27-df8af04ea832)


Upload your PowerPoint file for Presentation

![image](https://github.com/user-attachments/assets/710731d3-a540-45cb-b6b8-e7cac36ec265)


Now Start the Module    

![image](https://github.com/user-attachments/assets/d07e601b-ce0d-49f8-a022-5f69f77973a5)


Module is Started and Open For Registration First Using Face Detection

   Register With Name   

![image](https://github.com/user-attachments/assets/44e57793-1295-4728-b756-59237af7a140)


Authenticity  and Login 

![image](https://github.com/user-attachments/assets/0387f2d2-c8f8-4246-8400-7e91090535df)


Interface After Login Using Face Based Authentication for Presenting the Slides 


![image](https://github.com/user-attachments/assets/e90ef546-8c7f-42c7-9820-0636bb126bbf)


☝️ (Index finger): Next slide   


![image](https://github.com/user-attachments/assets/afe04844-430d-4ea6-9d09-d3e15e94063f)



✌️ (Index + Middle): Previous slide 


![image](https://github.com/user-attachments/assets/73759296-ea19-47af-af39-fe4a88c7d333)


If Face is not Detected then Gesture Blocked 


![image](https://github.com/user-attachments/assets/d282f522-34c4-4be7-8951-423280653549)



2.	Media Player Control using Hand gesture

The second component, the Media Control Module, allows users to manage video or audio playback through simple hand gestures. By detecting the number of fingers shown to the camera, users can perform functions like play, pause, forward, and rewind without touching any physical controls. This module operates independently and does not require face authentication.

FLOWCHART OF MEDIA PLAYER CONTROL

![image](https://github.com/user-attachments/assets/5e43ef25-42e3-4fed-9ccc-51032f196306)

This is Interface of Media Player Control


![image](https://github.com/user-attachments/assets/1728ec53-4570-423f-8b83-a8ee7cb1e92d)

Now Start the Module 

1. ✋ Open/Close Palm ==> Play/Pause

![image](https://github.com/user-attachments/assets/47648982-cae6-45be-9412-80e309a890bf)   

![image](https://github.com/user-attachments/assets/9c0d398b-a8c8-4590-870a-0f3f53f75d67)


2.  ☝️ Index Finger  ==> + 5s Forward

![image](https://github.com/user-attachments/assets/1a731143-7970-4700-9f21-405b79ecb2b4)

![image](https://github.com/user-attachments/assets/da9826d0-b882-4bb2-a1f1-83bb05619179)

3.  ✌️ Index + Middle Finger ==> -5s Backward

![Screenshot 2025-05-14 124420](https://github.com/user-attachments/assets/7a753a9c-ef2a-4d23-802a-14df96f26a71)
![Screenshot 2025-05-14 124621](https://github.com/user-attachments/assets/fdb4ed21-67cf-4dc5-a3f8-671c15f35ca0)

4.  🤟 Index + Middle + Ring (Finger) ==> +4 System Volume

![Screenshot 2025-05-14 124448](https://github.com/user-attachments/assets/10368ed6-ab3f-4dd9-b8ed-58b5cc8e0f89)
![Screenshot 2025-05-14 124643](https://github.com/user-attachments/assets/9c07ab72-1036-41cd-81dc-5e8b92fcfba6)


5.  🖖 All Four Fingers Except Thumb ==> -4 System Volume

![Screenshot 2025-05-14 124509](https://github.com/user-attachments/assets/83f4356d-c492-4c4d-9eb8-d8f9d008d1fc)
![Screenshot 2025-05-14 124659](https://github.com/user-attachments/assets/5fc4f66f-4e39-45ef-a00b-8b8a436deab8)


