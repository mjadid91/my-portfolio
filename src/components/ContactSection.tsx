import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const inputClass =
    "w-full rounded-2xl border border-border bg-card/70 px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-card focus:ring-4 focus:ring-primary/10 dark:border-white/10 dark:bg-white/[0.04] dark:focus:bg-white/[0.07]";

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                "service_oeyrcfy",
                "template_m7zpa3f",
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: "Mohamed",
                    time: new Date().toLocaleString("fr-FR", {
                        dateStyle: "full",
                        timeStyle: "short",
                    }),
                },
                "rgb_j_ayHFfKRn1q1"
            );

            toast({
                title: "Message envoyé !",
                description: "Merci pour votre message. Je vous répondrai rapidement.",
            });

            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error(error);

            toast({
                title: "Erreur",
                description: "Le message n’a pas pu être envoyé. Réessayez plus tard.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-background">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute left-[-140px] top-24 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />

            <div className="container-premium relative z-10">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Contact
                    </div>

                    <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                        Un projet, une alternance ou une opportunité ?
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Envoyez-moi un message, je vous répondrai dès que possible.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="premium-card p-7">
                        <h3 className="mb-4 text-2xl font-black text-foreground">
                            Informations
                        </h3>

                        <p className="mb-8 leading-7 text-muted-foreground">
                            Je suis disponible pour discuter d’un projet web, d’une
                            opportunité de stage, d’alternance ou d’une collaboration.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    href: "mailto:med.jadid@hotmail.com",
                                    icon: <Mail className="h-5 w-5" />,
                                    title: "Email",
                                    value: "med.jadid@hotmail.com",
                                },
                                {
                                    href: "tel:+33613650602",
                                    icon: <Phone className="h-5 w-5" />,
                                    title: "Téléphone",
                                    value: "+33 6 13 65 06 02",
                                },
                            ].map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-center gap-4 rounded-2xl border border-border bg-card/70 p-4 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:hover:text-white"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">{item.value}</p>
                                    </div>
                                </a>
                            ))}

                            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/70 p-4 text-muted-foreground dark:border-white/10 dark:bg-white/[0.04]">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Localisation</p>
                                    <p className="text-sm text-muted-foreground">
                                        Île-de-France, France
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="premium-card p-7">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-foreground">
                                    Nom *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Votre nom"
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-foreground">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="votre.email@example.com"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-foreground">
                                Objet *
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Sujet du message"
                                className={inputClass}
                            />
                        </div>

                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-foreground">
                                Message *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={7}
                                placeholder="Votre message..."
                                className={`${inputClass} resize-none`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="premium-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? (
                                <span className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                            ) : (
                                <Send className="mr-2 h-5 w-5" />
                            )}

                            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;