import { useEffect, useMemo, useState } from "react";
import { FaFilter, FaUndo, FaSearch, FaTimes } from "react-icons/fa";
import Header from "./Header";
import GetQuestion from "./GetQuestion";
import availableData from "./availableData.js";
import { motion } from "framer-motion";
import SignUp from "../SignUp.jsx";
const LS_KEY = "q_select_state_v1";
const LS_REG_KEY = "register_key_v1";
export default function Question({ registered, setRegistered }) {
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [examType, setExamType] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(LS_KEY));
      if (saved) {
        setSubject(saved.subject || "");
        setYear(saved.year || "");
        setExamType(saved.examType || "");
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify({ subject, year, examType }));
  }, [subject, year, examType]);



  const subjects = useMemo(() => {
    const s = Array.from(
      new Set(availableData.map((d) => d.subject).filter(Boolean))
    ).sort((a, b) => a.localeCompare(b));
    return s;
  }, []);
  const visibleSubjects = useMemo(() => {
    if (!subjectFilter.trim()) return subjects;
    const q = subjectFilter.toLowerCase();
    return subjects.filter((s) => s.toLowerCase().includes(q));
  }, [subjectFilter, subjects]);

  const yearsForSubject = useMemo(() => {
    if (!subject) return [];
    const rows = availableData.filter((d) => d.subject === subject);
    const years = Array.from(
      new Set(rows.flatMap((r) => r.yearQuestion?.map((y) => y.examyear) || []))
    )
      .filter(Boolean)
      .sort((a, b) => b - a);
    return years;
  }, [subject]);

  function resetAll() {
    setSubject("");
    setYear("");
    setExamType("");
    setSubjectFilter("");
    localStorage.removeItem(LS_KEY);
  }

  function pickLatestYear() {
    if (yearsForSubject.length) setYear(yearsForSubject[0]);
  }

  useEffect(() => {
    setYear("");
    setExamType("");
  }, [subject]);

  return (
    <>
      <Header />
      {registered === false && (
        <SignUp onRegistered={() => setRegistered(true)} />
      )}
     {registered && (<main  className="min-h-[60vh] px-4 sm:px-6 lg:px-12 mt-40 pb-16">
        <motion.section
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl mx-auto -mt-8"
        >
          <div className="rounded-2xl bg-linear-to-br from-slate-800/70 to-slate-900/60 border  border-slate-700 shadow-lg p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold  text-slate-100">
                  Select questions
                </h2>
                <p className="mt-1 text-sm  text-slate-300">
                  Choose subject, year and exam type — results appear below when
                  all are selected.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={resetAll}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-transparent border  border-slate-700 rounded-xl text-sm hover:bg-slate-800 transition"
                  aria-label="Reset selections"
                >
                  <FaUndo />
                  Reset
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium  text-slate-200"
                >
                  Subject
                </label>

                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Search subjects..."
                    value={subjectFilter}
                    onChange={(e) => setSubjectFilter(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl borderborder-slate-700  bg-slate-800 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    aria-label="Filter subjects"
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="subject-select" className="sr-only">
                    Choose subject
                  </label>
                  <select
                    id="subject-select"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 px-3 py-2 bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <option value="">-- choose subject --</option>
                    {visibleSubjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-2 text-xs text-slate-400 flex items-center gap-2">
                  <FaFilter className="text-sky-500" />
                  <span>{visibleSubjects.length} subject(s)</span>
                  {subject && (
                    <span className="ml-auto text-amber-600 text-xs">
                      Selected: {subject}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="year-select"
                  className="block text-sm font-medium  text-slate-200"
                >
                  Year
                </label>

                <select
                  id="year-select"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  disabled={!subject}
                  aria-disabled={!subject}
                  className={`w-full mt-2 rounded-xl px-3 py-2 border border-slate-700  bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 ${
                    subject
                      ? "focus:ring-sky-400 border-slate-200"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  <option value="">-- choose year --</option>
                  {yearsForSubject.length === 0 && subject && (
                    <option disabled>no years available</option>
                  )}
                  {yearsForSubject.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>

                <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                  <button
                    type="button"
                    onClick={pickLatestYear}
                    disabled={!subject || yearsForSubject.length === 0}
                    className={`text-sm px-2 py-1 rounded-md border ${
                      subject
                        ? "border-slate-200 hover:bg-slate-800"
                        : "opacity-40 cursor-not-allowed"
                    } transition`}
                    aria-disabled={!subject}
                  >
                    Pick latest
                  </button>

                  <span className="ml-auto">
                    {yearsForSubject.length} year(s)
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="examType"
                  className="block text-sm font-medium text-slate-200"
                >
                  Exam type
                </label>

                <select
                  id="examType"
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                  disabled={!subject}
                  aria-disabled={!subject}
                  className={`w-full mt-2 rounded-xl px-3 py-2 border border-slate-700 bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 ${
                    subject
                      ? "focus:ring-sky-400 border-slate-200"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  <option value="">-- choose exam --</option>
                  <option value="utme">UTME</option>
                  <option value="wassce">WASSCE</option>
                </select>

                <div className="mt-2 text-xs  text-slate-400">
                  Choose the exam you'd like to practice.
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!subject) {
                    document.getElementById("subject-select")?.focus();
                    return;
                  }
                  if (subject && !year) {
                    document.getElementById("year-select")?.focus();
                    return;
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-linear-to-r from-sky-600 to-indigo-600 text-white shadow hover:brightness-105 transition"
              >
                <FaSearch />
                Find Questions
              </button>

              <button
                type="button"
                onClick={resetAll}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border  border-slate-700 bg-transparent  text-slate-100  hover:bg-slate-800 transition"
              >
                <FaTimes />
                Clear
              </button>

              <div className="mt-2 sm:mt-0 ml-auto text-sm text-slate-300">
                {subject && year && examType ? (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60  text-slate-100">
                    Ready — {subject} · {year} · {examType.toUpperCase()}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full  bg-amber-900/10 t text-amber-200">
                    Complete all selections to view questions
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            {subject && year && examType ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <GetQuestion subject={subject} type={examType} year={year} />
              </motion.div>
            ) : (
              <div className="mt-6 rounded-xl border border-dashed border-slate-200/30 p-8 text-center text-slate-300 bg-slate-800/60">
                <p className="text-lg font-medium">No selection yet</p>
                <p className="mt-2 text-sm">
                  Select a subject, year and exam type to load practice
                  questions here.
                </p>
              </div>
            )}
          </div>
        </motion.section>
      </main>)}
    </>
  );
}
