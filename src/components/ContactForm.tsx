import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface ContactFormProps {
  email?: string;
  phone?: string;
}

const ContactForm = ({
  email = "rajputmaniratnam@gmail.com",
  phone = "+91 9534443341",
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <p className="text-muted-foreground mb-6">
            Let's connect and discuss how we can work together
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitSuccess && (
              <div className="p-3 bg-green-100 text-green-700 rounded-md text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>

        <div className="flex flex-col justify-start">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <Card className="mb-4">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {email}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
