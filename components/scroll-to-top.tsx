"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"





const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [buttonBottom, setButtonBottom] = useState('5rem'); 

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      const chatHeight = chatContainer.offsetHeight;
      setButtonBottom(`${chatHeight + 20}px`); 
    }

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{ bottom: buttonBottom }} 
      className={`fixed right-7 p-3 bg-primary mb-7 text-white rounded-full h-12 w-12 shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      } hover:bg-primary-dark z-50`} 
    >
      ↑
    </button>
  );
};

export default ScrollToTop;