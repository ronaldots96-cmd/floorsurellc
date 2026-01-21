import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi there! 👋 I'm FloorSure's virtual assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickResponses = [
    "Get a quote",
    "Flooring types",
    "Installation time",
    "Service area",
  ];

  const handleQuickResponse = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: text },
      {
        role: "assistant",
        content: getAutoResponse(text),
      },
    ]);
  };

  const getAutoResponse = (text: string): string => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("quote") || lowerText.includes("price") || lowerText.includes("cost")) {
      return "For a personalized quote, fill out our contact form or call (862) 448-0588. Our evaluation is free! 📋";
    }
    if (lowerText.includes("type") || lowerText.includes("floor") || lowerText.includes("option")) {
      return "We work with: 🪵 Solid Hardwood, Engineered Wood, Vinyl Flooring (LVP), Laminate, and Stair Installation. Which type interests you?";
    }
    if (lowerText.includes("time") || lowerText.includes("long") || lowerText.includes("days")) {
      return "Time varies by size and flooring type. On average: standard room = 1-2 days. We provide a precise estimate after a free evaluation! ⏱️";
    }
    if (lowerText.includes("area") || lowerText.includes("location") || lowerText.includes("serve")) {
      return "We serve all of Central and North Florida: Orlando, Tampa, Jacksonville, Gainesville, and surrounding areas. Confirm your location with us! 📍";
    }
    return "Thanks for your message! For detailed information, I recommend speaking directly with our team: (862) 448-0588 or fill out the contact form. 😊";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: getAutoResponse(input) },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-accent shadow-accent flex items-center justify-center hover:scale-110 transition-transform ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <MessageCircle className="w-7 h-7 text-accent-foreground" />
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-background rounded-2xl shadow-lg overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Bot className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-primary-foreground">
                  FloorSure Assistant
                </h4>
                <p className="text-xs text-primary-foreground/70 flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Online now
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-accent text-accent-foreground rounded-br-sm"
                        : "bg-secondary text-secondary-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Responses */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickResponses.map((text, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickResponse(text)}
                    className="px-3 py-1.5 text-xs bg-secondary text-accent rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    {text}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <Button
                size="icon"
                onClick={handleSend}
                className="rounded-full bg-accent hover:bg-accent/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
