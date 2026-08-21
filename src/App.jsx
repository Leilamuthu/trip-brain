import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';
import { tripData } from './data/tripData';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [suggestedPrompts, setSuggestedPrompts] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const messagesEndRef = useRef(null);

  // Initialize suggested prompts
  useEffect(() => {
    const generatePrompts = () => {
      const hour = new Date().getHours();
      const prompts = [];

      // Time-based suggestions
      if (hour >= 6 && hour < 10) {
        prompts.push("Where's good for breakfast around here?");
      } else if (hour >= 11 && hour < 14) {
        prompts.push("Where should I have lunch today?");
      } else if (hour >= 17 && hour < 21) {
        prompts.push("Dinner recommendations nearby?");
      } else {
        prompts.push("What's nearby?");
      }

      // Accommodation check-in
      prompts.push("What's my accommodation tonight?");

      // Trip planning
      prompts.push("What's next on our itinerary?");

      setSuggestedPrompts(prompts.slice(0, 3));
    };

    generatePrompts();
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (userMessage) => {
    // Hide suggestions when user starts typing
    setShowSuggestions(false);

    // Add user message to chat
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Send to Claude API with trip context
      const systemPrompt = buildSystemPrompt();

      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages,
          systemPrompt: systemPrompt
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from Claude');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage = data.content;

      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.message?.includes('offline')
        ? 'You appear to be offline. Trip data is available, but I need internet to answer questions.'
        : 'Sorry, I had trouble connecting. Try again in a moment.';

      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: errorMessage
        }
      ]);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  const handleSuggestedPrompt = (prompt) => {
    handleSendMessage(prompt);
  };

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  const buildSystemPrompt = () => {
    return `You are Trip Brain, a travel companion chatbot for Leila and Michael's Ireland & Spain trip (22 Aug - 20 Sept 2026).

Your role is to help travellers quickly find information about their trip: accommodation, transport, activities, restaurants, and emergency contacts.

IMPORTANT TONE RULES:
- Direct and efficient Australian English
- Short sentences, no fluff
- No AI clichés like "dive into," "unleash," "game-changing"
- Be honest, don't force friendliness
- Natural tone: it's fine to start sentences with "and" or "but"

AVAILABLE TRIP DATA:
${JSON.stringify(tripData, null, 2)}

RESPONSE GUIDELINES:
1. Always be accurate - wrong details about bookings are unhelpful
2. For accommodation queries, provide: name, address, phone, check-in/out times, booking ref
3. For transport queries, provide: booking ref, times, terminals/stations, duration
4. For restaurant queries, focus on foodie-friendly options with local cuisine emphasis
5. For emergency info, provide: contact numbers, embassy details, insurance hotline
6. For "what's nearby" questions, suggest restaurants/activities for current/mentioned location
7. For bike ride questions, link to Wee Dander app (https://wee-dander-2026.netlify.app)
8. For Spanish translation, provide: phrase in Spanish + pronunciation hint
9. If user asks about something not in trip data, say so directly

CONTEXT:
- Current date/time: ${new Date().toISOString()}
- Trip duration: 22 Aug - 20 Sept 2026
- Locations: Dublin, Newcastle, Carlow, Cork, Limerick, Tuam, Sligo, Armagh, Belfast, Derry, Glencolmcille, San Sebastián, Madrid
- Bike ride: 28 Aug - 4 Sept (7 stages, Wee Dander app integration)
- Foodie focus: Highlight restaurants with culinary excellence, local produce, wine selection`;
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🧠 Trip Brain</h1>
        <p>Your Ireland & Spain companion</p>
      </header>

      <main className="app-main">
        <ChatInterface
          messages={messages}
          isLoading={isLoading}
          onSendMessage={handleSendMessage}
          showSuggestions={showSuggestions}
          suggestedPrompts={suggestedPrompts}
          onSuggestedPrompt={handleSuggestedPrompt}
          onToggleSuggestions={toggleSuggestions}
          messagesEndRef={messagesEndRef}
        />
      </main>

      <footer className="app-footer">
        <p>Built for Leila & Michael | Aug 22 - Sept 20, 2026</p>
      </footer>
    </div>
  );
}

export default App;
