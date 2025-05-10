# AI Chat Widget for Software License FAQs

This is a chat widget built using React that allows users to ask questions about selling software licenses. It integrates with OpenAI's GPT-3.5 API to provide real-time responses to user inquiries.

### Features Implemented:
1. **Chat Widget**:
   - A floating button on the bottom-right corner of the screen that toggles between an open and closed state.
   - When clicked, the chat widget expands to show a conversation area and input field.
   - The widget can be opened and closed by clicking the button with a chat bubble icon or a close symbol (`✖`).

2. **Mocked AI Responses**:
   - When users ask about selling software licenses, the widget provides mocked responses about topics like:
     - Selling a license.
     - Legal issues with reselling software.
     - Payment processing for license sales.
   - In the future, real AI responses can be integrated by connecting to OpenAI’s GPT API.

3. **User Message Input**:
   - Users can type their questions into an input field.
   - Pressing "Enter" or clicking the **Send** button sends the message to the chat.

4. **Example Questions**:
   - Predefined example questions are provided for users to quickly click and insert into the input field.

5. **Loading State**:
   - While waiting for a response (or while the mocked AI function is running), a "Thinking..." message is displayed to indicate that the widget is processing the user's request.

6. **Responsive Design**:
   - The chat widget is designed to be fully responsive and works on different screen sizes. The chat interface appears and behaves consistently on both desktop and mobile devices.

7. **Dark/Light Mode**:
   - The chat widget adapts to the current theme of the website, supporting both light and dark modes.

8. **Icons**:
   - Open and close chat buttons are represented with a **chat bubble** icon and a **close symbol** (`✖`).
   - The "Send" button uses a **send icon** (paper plane/arrow) to represent sending the message.

---

### Design Choices:
- **React State Management**:
   - State is managed using React's `useState` and `useEffect` hooks. The widget’s open/close state is controlled by the `isOpen` state, while user input and messages are managed with `input` and `messages` states.
  
- **Mocked AI Responses**:
   - A mocked version of the AI response has been implemented with conditional logic based on keywords in the user’s question. This mimics an actual AI interaction but does not make an API call.
   
- **Icons**:
   - The `react-icons` package was used for the chat bubble (`FiMessageCircle`) and send (`FiSend`) icons. This provides a simple and clean interface for the user.

- **Accessibility and UX**:
   - The chat widget is placed at the bottom-right of the screen to be easily accessible but not intrusive. The button to open/close the chat is a floating icon that can be clicked anytime.

---

### Time Spent:
- **Initial Setup & Configuration**: 1 hour
   - Set up the project using Create React App.
   - Installed necessary dependencies (`react-icons`).
   
- **Building the Chat Widget**: 3 hours
   - Created the core UI structure for the chat widget.
   - Implemented functionality to toggle the chat widget open/close.
   - Managed the state for the chat messages, user input, and loading state.
   - Added mocked AI responses based on example questions.

- **Styling & UI Design**: 2 hours
   - Designed the chat widget interface to ensure a clean and user-friendly experience.
   - Applied responsive styles to ensure the widget works on all screen sizes.
   
- **Testing & Debugging**: 1 hour
   - Tested the functionality of the widget and ensured the UI was consistent across different devices.
   - Debugged minor issues related to the chat messages and input field.

- **Final Adjustments**: 1 hour
   - Integrated chat icons (open/close and send icons) using `react-icons`.
   - Added tooltips and ensured proper accessibility features.

---

### Installation:

1. Clone the repository:

   ```bash
   git clone <repo-url>
