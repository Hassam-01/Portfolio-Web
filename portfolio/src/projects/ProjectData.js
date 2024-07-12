
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project2_1Image from '../assets/project2_1.png';
import project3Image from '../assets/project3face.png';
import project3_1Image from '../assets/project3_1.png';
import project4Image from '../assets/project4voice.png';
import project4_1Image from '../assets/project4_1.png';
import project5Image from '../assets/project5bill.jpg';
import project5_1Image from '../assets/project5_1.jpg';
import project1 from "../assets/project1.png";
import project1_2 from "../assets/project1_2.png";
const ProjectData = [
    {
        id: 1,
        title: "2D Graph Plotter",
        description: `
## Overview:

This project, developed during the first semester, is a data visualization tool using C. Completed in about a month, it utilizes Turbo C and the graphics.h library to enhance visual appeal. The software supports various types of graphs, including Line Graphs, Pie Charts, Bar Graphs, and even 3D Bar Graphs.
                                                                                
![IMAGE](${project1}) ![IMAGE](${project1_2}) 



## Key Features:
1. Graph Options: Choose from four types of graphs – Line Graph, Pie Chart, Bar Graph, and 3D Bar Graph.
2. Easy Graphing: The graphs are dynamically generated on the screen as you input your data, making the process intuitive and straightforward.
3. Simple Steps: The software guides you through selecting the graph type and entering your data without any confusion.
4. Visual Clarity: The graphs are displayed in a dedicated window, making it easy to understand the visualized data.

## Tools:
- Turbo C
- graphics.h library
        `,
        overview: "A C-Based Graph Plotter used to plot the data on 2D Graph",
        img: project1Image,
        git: "https://github.com/vanix056/graph-plotter",
    },
    {
        id: 4,
        title: "Voice Bot",
        description: `
## Overview:

Abdullah Assists is a voice/chat bot developed in Java that combines various advanced features to provide a comprehensive assistant experience.

![IMAGE](${project4Image}) ![IMAGE](${project4_1Image})
## Key Features:
1. Speech Recognition and Synthesis: The bot is equipped with a speech recognition model that achieves a 75% accuracy rate, with plans for improvement. For speech synthesis, Free TTS is used.
2. Translation: Integrated with Google Web App Scripts API, the bot offers seamless translation capabilities.
3. Weather Forecast: Utilizes the OpenWeatherMap (OWM) API to provide accurate and up-to-date weather information.
4. Unique Joke Generation: Using a Markov Chain Neural Network, the bot generates new, non-repetitive jokes, adding a fun element to its capabilities.
5. Local Commands: The bot can open and close apps, search, and play music by sending user queries to the terminal (on Mac) or cmd (on Windows). These commands are currently not available for other operating systems.
6. Date and Time: Provides current date and time using Java's built-in functions.

## Tools:
- Java
- Free TTS
- Google Web App Scripts API
- OpenWeatherMap API
- Markov Chain Neural Network
        `,
        overview: "A Java based Voice Bot which can respond to almost every query when accessed with specific commands.",
        img: project4Image,
        git: "https://github.com/vanix056/voice-bot",
    },
    {
        id: 3,
        title: "Emotion Detection | Self Trained",
        description: `
## Overview:
An emotion detection system using a custom-trained model with supervised learning techniques. The system can recognize five key emotions: happy, sad, angry, surprised, and fearful. Utilizes OpenCV for face detection and a trained model to identify emotions within the detected face in real-time.

![IMAGE](${project3Image}) ![IMAGE](${project3_1Image})

## Key Features:
- Real-time Emotion Detection: Utilizes OpenCV for face detection and a trained model to identify emotions within the detected face in real-time.
- Image-based Emotion Detection: Capable of analyzing and detecting emotions from static images.
- Hardware Integration: Implemented using an Iriun webcam for capturing high-quality video input.

## Tools:
- Python
- OpenCV
- Iriun webcam
        `,
        overview: "Emotion Detection Project Using OpenCv and self-trained model using Supervised Learning Techniques.",
        img: project3Image,
        git: "https://github.com/vanix056/emotion-detection",
    },
    {
        id: 2,
        title: "Virtual Mouse Control",
        description: `
## Overview:

A Virtual Mouse powered by intuitive hand gestures, performing functions like left/right click, double-click, mouse movement, screenshot capture, screen brightness adjustment, and audio level management—all with simple hand gestures. Utilizes OpenCV for computer vision tasks, MediaPipe for hand tracking and gesture recognition, and PyAutoGUI for controlling mouse and keyboard functions.

![IMAGE](${project2Image}) ![IMAGE](${project2_1Image})

## Key Features:
- Gesture-Based Controls: Perform left/right clicks, double-clicks, and control mouse movement using intuitive hand gestures.
- Enhanced Functionality: Effortlessly capture screenshots, adjust screen brightness, and manage audio levels with a wave of your hand.
- Interactive Demo: Watch the demo video below to see the Virtual Mouse in action and discover how it can enhance your daily workflow.

## Tools:
- Python
- OpenCV
- MediaPipe
- PyAutoGUI
        `,
        overview: "A virtual mouse controlled using gestures and can perform almost all the features of a regular mouse",
        img: project2Image,
        git: "https://github.com/vanix056/virtual-mouse",
    },
    {
        id: 5,
        title: "Electric Billing System Portal",
        description: `
## Overview:

EnergySyncPortal is designed to streamline electricity bill management and enhance customer experience in the energy sector. It includes an efficient complaint management system to address customer concerns effectively, with a user-friendly interface, comprehensive overview, and enhanced accessibility.

![IMAGE](${project5Image})  ![IMAGE](${project5_1Image}) 
        
        
## Key Features:
1. User-Friendly Interface: Navigate seamlessly with a clean and intuitive dashboard featuring sections like Dashboard, Bills, Transactions, Meter Applications, and Complaints.
2. Comprehensive Overview: Gain insights into all complaints, including numbers, descriptions, and current statuses, ensuring transparency and informed customer engagement.
3. Enhanced Accessibility: Access billing information, transaction history, and meter applications conveniently from a unified platform.

## Acknowledgement:
- Developed with the expertise of Bakhat Nasar and Muhammad Muneeb-Ur-Rehman.

## Tools:
- Web development tools
- Database management systems
`,
overview: "Covers all the requirements necessary to replace the traditional billing system.",
img: project5Image,
git: "https://github.com/vanix056/billing-system",
},
];

export default ProjectData;
