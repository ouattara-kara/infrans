"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContent"; 
import { useLanguageStore } from "@/lib/i18n/store/useLanguageStore";


export default function Contact() {
  const { t } = useLanguageStore(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: t("contact.success_message"), 
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: t("contact.error_message"), 
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: t("contact.error_message"), 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("contact.title")} 
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("contact.subtitle")} 
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 mt-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold">{t("contact.phone")}</h3> 
                <p className="text-muted-foreground">+225 01 00 96 66 11</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold">{t("contact.email")}</h3> 
                <p className="text-muted-foreground">Infrans@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold">{t("contact.address")}</h3> 
                <p className="text-muted-foreground">Abidjan-Cocody- 7 ème tranche</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-center">
                {t("contact.opening_hours")} 
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{t("contact.weekdays")}</span> 
                  <span>8h30 - 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.saturday")}</span> 
                  <span>10h - 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.sunday")}</span> 
                  <span>{t("contact.closed")}</span> 
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {submitStatus.message && (
                <div
                  className={`p-4 mb-4 rounded-md ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {submitStatus.message}
                </div>
              )}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("contact.name_label")} 
                  </label>
                  <Input
                    id="name"
                    placeholder={t("contact.name_placeholder")} 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t("contact.email_label")} {/* Traduction dynamique */}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("contact.email_placeholder")} // Traduction dynamique
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {t("contact.subject_label")} {/* Traduction dynamique */}
                </label>
                <Input
                  id="subject"
                  placeholder={t("contact.subject_placeholder")} // Traduction dynamique
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {t("contact.message_label")} {/* Traduction dynamique */}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("contact.message_placeholder")} // Traduction dynamique
                  className="min-h-[150px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t("contact.submitting") : t("contact.submit_button")} {/* Traduction dynamique */}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}