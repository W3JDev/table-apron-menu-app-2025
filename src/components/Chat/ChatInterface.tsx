import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { ChatMessage } from '../../types/menu';
import { uiTranslations } from '../../constants/menu';

interface ChatInterfaceProps {
  language: string;
  onSendMessage: (message: string) => void;
  chatHistory: ChatMessage[];
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  language,
  onSendMessage,
  chatHistory
}) => {
  const [question, setQuestion] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSend = () => {
    if (!question.trim()) return;
    onSendMessage(question);
    setQuestion('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t p-4">
      {/* Chat history */}
      <div 
        ref={chatContainerRef}
        className="bg-red-50 rounded-lg p-4 mb-4 max-h-64 overflow-y-auto scroll-smooth"
      >
        {chatHistory.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 last:mb-0 ${
              msg.role === 'assistant'
                ? 'text-red-800'
                : 'text-gray-800'
            }`}
          >
            <div className="flex gap-2">
              <span className="flex-shrink-0">
                {msg.role === 'assistant' ? '🍽️' : '👤'}
              </span>
              <div className="flex-1">
                {msg.content.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 ? 'mt-2' : ''}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex gap-2">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={uiTranslations[language]?.inputPlaceholder || uiTranslations.en.inputPlaceholder}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 resize-none h-12 min-h-[3rem] max-h-32"
          rows={1}
        />
        <button
          onClick={handleSend}
          className="bg-red-800 text-white p-3 rounded-lg hover:bg-red-900 transition-colors duration-200 flex-shrink-0"
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </div>

      {/* Character count */}
      {question.length > 0 && (
        <div className="mt-1 text-right text-sm text-gray-500">
          {question.length}/500
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
