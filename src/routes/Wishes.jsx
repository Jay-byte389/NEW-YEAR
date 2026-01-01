import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Wishes() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || form.message.length < 5) {
      setStatus("error");
      return;
    }

    emailjs
      .send(
        "service_xxxxx",   // 🔴 replace
        "template_xxxxx",  // 🔴 replace
        {
          from_name: form.name,
          to_email: form.email,
          message: form.message
        },
        "public_xxxxx"     // 🔴 replace
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };

  return (
    <div className="container page">
      <h2 className="text-center mb-4">🎆 Send New Year Wishes 🎆</h2>

      <form className="glass p-4 mx-auto" style={{ maxWidth: "500px" }} onSubmit={sendEmail}>
        
        {status === "success" && (
          <div className="alert alert-success">🎉 Wish sent successfully!</div>
        )}

        {status === "error" && (
          <div className="alert alert-danger">❌ Failed to send wish</div>
        )}

        <input
          type="text"
          name="name"
          className="form-control mb-3"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Recipient Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          className="form-control mb-3"
          placeholder="Your New Year Wish"
          rows="4"
          value={form.message}
          onChange={handleChange}
        />

        <button className="btn btn-warning w-100">
          Send Wish 🎆
        </button>
      </form>
    </div>
  );
}
