
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      // Call OpenAI API through Supabase Edge Function
      const response = await fetch(
        'https://pevfeprooxtsfalprpom.supabase.co/functions/v1/ask-openai',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            prompt: userMessage,
            chatHistory: messages
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Add AI response to chat
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.generatedText || 'Sorry, I could not process your request' }
      ]);

    } catch (error) {
      console.error('Error calling API:', error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
      
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, there was an error processing your request. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bot Button */}
      <button 
        className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/90 transition-all z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50 flex flex-col">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 space-y-4 h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg max-w-[85%] ${
                  message.role === 'user' 
                    ? 'bg-primary/10 ml-auto' 
                    : 'bg-gray-100 mr-auto'
                }`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 rounded-lg p-3 max-w-[85%] mr-auto animate-pulse">
                <div className="flex gap-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex gap-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send size={18} />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
