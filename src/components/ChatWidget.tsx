import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Loader2 } from 'lucide-react';
import dhanaLogo from '@/assets/dhana-logo-blue-bot.svg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import API from '@/api/api';

interface Message {
    role: 'user' | 'bot';
    text: string;
}

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState<'english' | 'tamil'>('english');

    // Initial messages map
    const initialMessages: Record<string, Message> = {
        english: { role: 'bot', text: "Hello! I'm Dhana, your travel assistant. How can I help you plan your adventure today?" },
        tamil: { role: 'bot', text: "வணக்கம்! நான் தனா, உங்கள் பயண உதவியாளர். உங்கள் பயணத்தைத் திட்டமிட நான் எவ்வாறு உதவ முடியும்?" }
    };

    const [messages, setMessages] = useState<Message[]>([initialMessages['english']]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const response = await API.post('/chat', { message: userMessage, language });
            const botReply = response.data.reply;

            setMessages(prev => [...prev, { role: 'bot', text: botReply }]);

            if (response.data.isDemo) {
                console.warn("Chatbot is in demo mode (missing API key).");
            }
        } catch (error: any) {
            console.error("Chat error:", error);
            const errorMessage = error.response?.data?.reply || "I'm having trouble connecting right now. Please try again later.";
            setMessages(prev => [...prev, { role: 'bot', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 flex flex-col gap-3 shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full border-2 border-white/20 shadow-sm">
                                    <img src={dhanaLogo} alt="Dhana AI" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">{language === 'english' ? 'Dhana Travel Assistant' : 'தனா பயண உதவியாளர்'}</h3>
                                    <p className="text-white/80 text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        {language === 'english' ? 'Online' : 'ஆன்லைனில்'}
                                    </p>
                                </div>
                            </div>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="text-white hover:bg-white/20 rounded-full h-8 w-8"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Language Toggles */}
                        <div className="flex bg-black/20 rounded-lg p-1">
                            <button
                                onClick={() => {
                                    if (language !== 'english') {
                                        setLanguage('english');
                                        setMessages([initialMessages['english']]);
                                    }
                                }}
                                className={cn(
                                    "flex-1 text-xs font-semibold py-1.5 rounded-md transition-all",
                                    language === 'english' ? "bg-white text-pink-600 shadow-sm" : "text-white/80 hover:bg-white/10"
                                )}
                            >
                                English
                            </button>
                            <button
                                onClick={() => {
                                    if (language !== 'tamil') {
                                        setLanguage('tamil');
                                        setMessages([initialMessages['tamil']]);
                                    }
                                }}
                                className={cn(
                                    "flex-1 text-xs font-semibold py-1.5 rounded-md transition-all",
                                    language === 'tamil' ? "bg-white text-pink-600 shadow-sm" : "text-white/80 hover:bg-white/10"
                                )}
                            >
                                தமிழ் (Tamil)
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/40 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "flex items-start gap-2.5 max-w-[85%]",
                                    msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                                )}
                            >
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                                    msg.role === 'user' ? "bg-gray-200" : "bg-transparent p-0.5"
                                )}>
                                    {msg.role === 'user' ?
                                        <User className="w-5 h-5 text-gray-600" /> :
                                        <img src={dhanaLogo} alt="Bot" className="w-full h-full object-cover" />
                                    }
                                </div>

                                <div className={cn(
                                    "p-3 rounded-2xl text-sm shadow-sm leading-relaxed",
                                    msg.role === 'user'
                                        ? "bg-primary text-primary-foreground rounded-tr-none bg-blue-600 text-white"
                                        : "bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-tl-none text-gray-800 dark:text-gray-100"
                                )}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex items-start gap-2.5 mr-auto">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                    <img src={dhanaLogo} alt="Bot" className="w-full h-full object-cover" />
                                </div>
                                <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none border border-gray-100 dark:border-zinc-700 shadow-sm">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
                        <div className="flex items-center gap-2 relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder={language === 'english' ? "Ask about trips, packages..." : "பயணங்கள் பற்றி கேளுங்கள்..."}
                                className="flex-1 bg-gray-100 dark:bg-zinc-800 text-sm rounded-full px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all border border-transparent focus:border-pink-500/30"
                                disabled={isLoading}
                            />
                            <Button
                                size="icon"
                                onClick={handleSend}
                                disabled={!input.trim() || isLoading}
                                className={cn(
                                    "absolute right-1 top-1 h-8 w-8 rounded-full transition-all",
                                    input.trim() ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-105" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                )}
                            >
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            </Button>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-[10px] text-gray-400">Powered by Dhana AI</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className={cn(
                    "rounded-full h-14 w-14 shadow-2xl transition-all duration-300 hover:scale-110 p-0 overflow-hidden",
                    isOpen ? "bg-gray-800 hover:bg-gray-900 rotate-90" : "bg-white hover:opacity-90 animate-bounce-slow border-2 border-blue-600"
                )}
            >
                {isOpen ? <X className="w-6 h-6 text-white" /> : <img src={dhanaLogo} alt="Chat" className="w-full h-full object-cover" />}
            </Button>
        </div>
    );
};

export default ChatWidget;
