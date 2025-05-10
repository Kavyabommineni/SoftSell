
# AI Chat Widget for Software License Sales

This project implements an AI-powered chat widget to assist users in selling their software licenses. The chat widget can answer user questions related to the software sales process and provide relevant information. It is built using React and integrates with OpenAI's GPT-3.5 model to generate responses. The chat widget can be opened and closed by clicking a button.

## Features

- **AI-Powered Chat**: The widget leverages OpenAI's GPT-3.5 API to provide real-time responses to user questions.
- **Mocked AI**: For development purposes, a mocked version of the AI is included to simulate responses, which can be toggled.
- **Dark/Light Mode**: The application supports both light and dark modes, allowing users to toggle between them for a comfortable experience.
- **Example Questions**: Predefined questions are provided, such as:
  - "How do I sell my license?"
  - "Is it legal to resell software?"
  - "How long does it take to get paid?"
- **Toggle Button**: A button to toggle between dark and light modes is fixed at the top-right of the screen for easy access.
- **Open/Close Chat**: The chat window can be opened and closed, offering a non-intrusive chat experience. It displays a chat bubble icon when closed.

## Design Choices

1. **React for UI**: React is used to build a dynamic and interactive front-end for the chat widget. State management with React hooks is used for handling messages and user input.
   
2. **OpenAI Integration**: The chat widget integrates with OpenAI’s GPT-3.5 model to provide AI-generated responses. You can substitute the AI API with a mocked version if OpenAI integration is unavailable during development.

3. **Tailwind CSS**: Tailwind CSS is used for styling the chat widget. This utility-first CSS framework makes it easy to style the chat widget and create a responsive design.

4. **Responsive Design**: The widget is designed to be mobile-friendly and adjusts the layout based on screen size. It is placed fixed at the bottom-right of the screen for easy access on both mobile and desktop.

5. **State Management**: The React `useState` hook is used for managing states like chat messages, user input, and the loading state when the AI is processing.

## Time Spent

- **Initial Setup**: 1 hour - Setting up React project, installing dependencies (Tailwind CSS, OpenAI API, etc.).
- **Implementing the Chat Widget**: 3 hours - Building the chat UI and implementing the input handling, message rendering, and interaction with OpenAI.
- **Dark/Light Mode**: 2 hour - Implementing the theme toggle feature and ensuring it works across all components.
- **Testing & Debugging**: 2 hours - Testing the AI responses, fixing issues with API integration, and ensuring smooth functionality.
- **Styling & UI Improvements**: 3 hour - Enhancing the design using Tailwind CSS for responsiveness and visual appeal.
- **Mocking the AI**: 2 hour - Adding a mocked version of the AI for offline development or when OpenAI is unavailable.

**Total Time Spent**: 13 hours

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-chat-widget.git
cd ai-chat-widget
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add your OpenAI API Key

Create a `.env` file in the root of the project and add your OpenAI API key:

```bash
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

### 4. Run the Application

```bash
npm start
```

The application will start on `http://localhost:3000`.

## Usage

- When you run the app, you'll see a floating chat widget on the bottom right of your screen.
- You can type questions or click on the example questions provided in the chat.
- You can toggle between dark and light modes using the toggle button on the top-right of the screen.

## Future Improvements

- **Multi-language support**: Implement multilingual capabilities for users around the world.
- **User Authentication**: Allow users to save their previous conversations or query history by adding a user authentication feature.
- **Advanced AI features**: Add more complex AI responses, including image generation or code suggestions based on the queries.



## Acknowledgements

- **OpenAI**: For providing the powerful GPT-3.5 API that powers the AI chat responses.
- **Tailwind CSS**: For the utility-first CSS framework that made styling simple and efficient.

