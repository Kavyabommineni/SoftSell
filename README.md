
# AI Chat Widget for Software License Sales

**Live Demo**: [https://myappsoftsell.netlify.app/](https://myappsoftsell.netlify.app/)

This project implements an AI-powered chat widget to assist users in selling their software licenses. The chat widget answers user questions related to the software sales process and provides relevant information. It is built using React and integrates with OpenAI's GPT-3.5 model to generate responses. The chat widget can be opened and closed by clicking a button.

---

## 📁 Project Structure

```
softsell/
├── public/
├── src/
│   ├── components/
│   │   ├── ChatWidget.jsx
│   │   ├── MockedChatWidget.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   └── ContactForm.jsx
│   ├── App.jsx
│   ├── styles.css
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## ✅ Features

- **AI-Powered Chat**: The widget leverages OpenAI's GPT-3.5 API to provide real-time responses to user questions.
- **Mocked AI**: For development purposes, a mocked version of the AI is included to simulate responses, which can be toggled.
- **Dark/Light Mode**: The application supports both light and dark modes, allowing users to toggle between them for a comfortable experience.
- **Example Questions**: Predefined questions are provided, such as:
  - "How do I sell my license?"
  - "Is it legal to resell software?"
  - "How long does it take to get paid?"
- **Toggle Button**: A button to toggle between dark and light modes is fixed at the top-right of the screen for easy access.
- **Open/Close Chat**: The chat window can be opened and closed, offering a non-intrusive chat experience. It displays a chat bubble icon when closed.

---

## 🎯 Design Choices

- **React**: Used for building a dynamic and interactive front-end for the chat widget. State management with React hooks handles messages and user input.
- **OpenAI Integration**: The widget integrates with OpenAI’s GPT-3.5 model to provide AI-generated responses. If OpenAI integration is unavailable during development, a mocked version is used.
- **Tailwind CSS**: For styling the chat widget. Tailwind's utility-first CSS framework makes it easy to build responsive, aesthetically pleasing layouts.
- **Responsive Design**: The widget is designed to be mobile-friendly and adjusts based on screen size. It is fixed at the bottom-right for easy access across devices.
- **State Management**: The React `useState` hook is used to handle chat messages, user input, and the loading state when AI is processing.

---

## 🕒 Time Spent (within 48-hour target)

| Task                           | Time Spent  |
|--------------------------------|-------------|
| **Project Setup & Styling**    | 2 hours     |
| **Chat Widget Development**    | 3 hours     |
| **AI API Integration**         | 2 hours     |
| **Mocked AI Implementation**   | 2 hours     |
| **Dark/Light Mode Implementation** | 1.5 hours |
| **UI Improvements & Styling**  | 2.5 hours   |
| **Testing & Debugging**        | 2 hours     |
| **Deployment (Netlify)**       | 1 hour      |
| **Documentation & README**     | 1 hour      |

**Total Time**: ~16 hours (within the 48-hour target)

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/your-username/SoftSell.git
cd SoftSell
npm install
```

### 2. Add OpenAI API Key

Create a `.env` file in the root of your project and add your OpenAI API key:

```bash
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

### 3. Run the Application

```bash
npm start
```

The application will start at `http://localhost:3000`.

---

## 🌐 Deployment

Deployed via [Netlify](https://www.netlify.com/)  
Live Site: [https://myappsoftsell.netlify.app/](https://myappsoftsell.netlify.app/)

---

## 🔮 Future Enhancements

- **Multi-language support**: Implement multilingual capabilities for users around the world.
- **User Authentication**: Allow users to save their previous conversations or query history by adding user authentication features.
- **Advanced AI features**: Include more complex AI responses, such as image generation or code suggestions based on user queries.

---

## 🙏 Acknowledgements

- **OpenAI**: For providing the powerful GPT-3.5 API that powers the AI chat responses.
- **Tailwind CSS**: For the utility-first CSS framework that made styling simple and efficient.
- **Netlify**: For deployment.
