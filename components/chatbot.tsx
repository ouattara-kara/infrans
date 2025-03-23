"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Bonjour ! Je suis l'assistant virtuel de Infrans. Comment puis-je vous aider aujourd'hui ?",
    sender: "bot",
    timestamp: new Date(),
  },
]

// Réponses prédéfinies pour le chatbot
const botResponses: Record<string, string> = {
  default:
    "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ou choisir parmi les sujets suivants : services, tarifs, contact, support technique ?",
  bonjour: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
  salut: "Salut ! Comment puis-je vous aider aujourd'hui ?",
  service:
    "Nous proposons plusieurs services : Infrastructure Réseau, Cybersécurité, Maintenance Système, Solutions VPN, Cloud Computing et Support 24/7. Quel service vous intéresse ?",
  prix: "Nos tarifs varient selon vos besoins spécifiques. Vous pouvez demander un devis personnalisé via notre formulaire en ligne ou en nous contactant directement.",
  devis:
    "Vous pouvez demander un devis personnalisé en remplissant notre formulaire en ligne sur la page 'Demander un devis' ou en nous appelant au +33 1 23 45 67 89.",
  contact:
    "Vous pouvez nous contacter par téléphone au +225 01 00 96 66 11, par email à infrans@gmail.com, ou en utilisant le formulaire de contact sur notre site.",
  problème:
    "Je suis désolé d'entendre que vous rencontrez un problème. Pour une assistance technique immédiate, veuillez contacter notre équipe de support au +225 01 00 96 66 11 ou envoyer un email à infrans@gmail.com.",
  merci: "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.",
  "au revoir": "Au revoir ! N'hésitez pas à revenir si vous avez d'autres questions.",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Fonction pour faire défiler automatiquement vers le bas
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [isOpen, scrollToBottom])

  // Fonction pour générer une réponse du bot
  const generateBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase()

    // Vérifier les mots-clés dans le message de l'utilisateur
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (keyword !== "default" && lowerCaseMessage.includes(keyword)) {
        return response
      }
    }

    // Réponse par défaut si aucun mot-clé n'est trouvé
    return botResponses.default
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // Simuler un délai de réponse du bot (entre 500ms et 1500ms)
    setTimeout(
      () => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: generateBotResponse(newMessage),
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
      },
      Math.random() * 1000 + 500,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  // Modifier la position du chatbot pour éviter les chevauchements sur mobile
  return (
    <>
      {/* Bouton pour ouvrir le chatbot */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-20 right-6 z-40 rounded-full h-14 w-14 p-0 shadow-lg ${isOpen ? "hidden" : "flex"} md:bottom-6`}
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Fenêtre du chatbot */}
      <Card
        className={`fixed bottom-20 right-6 z-50 w-[calc(100%-3rem)] sm:w-96 shadow-xl transition-all duration-300 md:bottom-6 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-4 flex flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bot Avatar" />
              <AvatarFallback>
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-base">Assistant Infrans</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-primary-foreground hover:bg-primary/90"
            aria-label="Fermer le chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "user" ? "text-primary-foreground/70" : "text-secondary-foreground/70"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>

        <CardFooter className="p-3 border-t">
          <div className="flex w-full gap-2">
            <Input
              placeholder="Tapez votre message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button size="icon" onClick={handleSendMessage} disabled={newMessage.trim() === ""} aria-label="Envoyer">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}

