import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send message.");
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again later.", variant: "destructive" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-[#FFA94D]">Get in Touch</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required className="min-h-[150px]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Button type="submit" className="w-full bg-[#FFA94D] hover:bg-[#FF922B]">Send Message</Button>
            </motion.div>
          </form>
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Connect with me</h2>
            <div className="flex gap-4">
              <motion.a initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} href="https://github.com/rahulankam20" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full hover:bg-[#FFA94D] hover:text-white transition-colors">
                <FiGithub size={24} />
              </motion.a>
              <motion.a initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} href="https://www.linkedin.com/in/rahul-ankam/" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full hover:bg-[#FFA94D] hover:text-white transition-colors">
                <FiLinkedin size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
