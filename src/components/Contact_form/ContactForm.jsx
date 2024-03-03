import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Configure your EmailJS service details
        const serviceId = 'service_j36ee9l';
        const templateId = 'service_j36ee9l';
        const userId = 'y60YesiEQiclgfOY0';

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, { name, email, message }, userId)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                // Reset the form fields
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <div>
            <h1 className={styles.title}>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className={styles.label}>Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                />

                <label htmlFor="email" className={styles.label}>Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                />

                <label htmlFor="message" className={styles.label}>Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={styles.textarea}
                ></textarea>

                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;