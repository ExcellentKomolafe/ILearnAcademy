import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
export default function SignUp({ onRegistered }) {
  const endpoint = `https://formspree.io/f/xqapyrbk`;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (form.phone && !/^\+?[0-9]{7,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setLoading(true);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        _subject: "New registration from site",
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        setServerError(data?.error || "Submission failed. Try again.");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", password: "" });
      onRegistered?.();
      navigate("/question");
    } catch (err) {
      setServerError(err?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-md mt-20 mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6"
        >
          <header className="mb-4">
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Register To Acess Free Past Questions
            </h1>
            <p className="text-emerald-800 my-2">
            <a href="https://chat.whatsapp.com/HBHfiVZLpdPFahNer3u6YL">
                  click To Join the Whatsapp group
                </a>
            </p>
            <p className="text-sm mt-2 text-slate-500 dark:text-slate-300">
              Join iLearn Academy — quick sign up.
            </p>
          </header>

          {success ? (
            <div className="mb-4 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700">
              <strong>Registration submitted.</strong>
              <div className="text-sm">
                <a href="https://chat.whatsapp.com/HBHfiVZLpdPFahNer3u6YL">
                  CLICK To Join the Whatsapp group
                </a>
              </div>
            </div>
          ) : null}

          {serverError && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/40 text-red-700">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Full name
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                    errors.name
                      ? "border-red-300"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-600">
                    {errors.name}
                  </p>
                )}
              </label>

              <label className="block">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                    errors.email
                      ? "border-red-300"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600">
                    {errors.email}
                  </p>
                )}
              </label>

              <label className="block">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  Phone number
                </span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg border px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                    errors.phone
                      ? "border-red-300"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                  placeholder="+2348012345678"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs text-red-600">
                    {errors.phone}
                  </p>
                )}
              </label>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-sky-600 to-indigo-600 text-white font-medium shadow hover:brightness-105 transition mt-10"
                disabled={loading}
                aria-disabled={loading}
              >
                {loading ? (
                  <svg
                    className="w-4 h-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-25"
                    />
                    <path
                      d="M4 12a8 8 0 018-8"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-75"
                    />
                  </svg>
                ) : null}
                <span>{loading ? "Submitting..." : "Register"}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
