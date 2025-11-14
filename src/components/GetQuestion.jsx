import React, { useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import Signup from "../SignUp";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSpinner,
  FaRedo,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
} from "react-icons/fa";

export default function GetQuestion({ subject, type, year }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const Token = import.meta.env.VITE_ALOC_TOKEN;
  const [results, setResults] = useState(null);

  const [answers, setAnswers] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("answers_v1")) || [];
    } catch {
      return [];
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const url = "https://questions.aloc.com.ng/api/v2/m";

  const buildParam = () => {
    const param = { subject };
    if (type) param.type = type;
    if (year) param.year = year;
    return param;
  };

  const fetchData = useCallback(async () => {
    if (!subject) return;
    setLoading(true);
    setError(null);
    setResults(null);
    setData([]);
    setAnswers([]);
    setCurrentIndex(0);

    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          AccessToken: Token,
        },
        params: buildParam(),
      });

      const questions = response.data?.data || [];
      setData(questions);
      sessionStorage.removeItem("answers_v1");
    } catch (err) {
      setError(
        err?.response?.data?.message || err?.message || "Unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  }, [subject, type, year, Token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    try {
      sessionStorage.setItem("answers_v1", JSON.stringify(answers));
    } catch (e) {}
  }, [answers]);

  const setAnswerFor = (id, val) => {
    setAnswers((prev) => {
      const idx = prev.findIndex((p) => p.id === id);
      if (idx === -1) return [...prev, { id, ans: val }];
      const copy = [...prev];
      copy[idx] = { id, ans: val };
      return copy;
    });
  };

  const answeredCount = useMemo(() => answers.length, [answers]);

  const canSubmit = data.length > 0 && answers.length > 0;
  const totalQuestions = data.length;

  const goto = (index) => {
    if (index < 0 || index >= totalQuestions) return;
    setCurrentIndex(index);
    const el = document.getElementById("question-card");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const next = () => goto(Math.min(totalQuestions - 1, currentIndex + 1));
  const prev = () => goto(Math.max(0, currentIndex - 1));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey))
        setShowConfirmSubmit(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, totalQuestions, next, prev]);

  function evaluateResults() {
    if (!data || data.length === 0) return;
    let correctCount = 0;
    const detailed = data.map((q) => {
      const user = answers.find((a) => a.id === q.id);
      const correct = q.option[q.answer];
      const isCorrect = user?.ans === correct;
      if (isCorrect) correctCount++;
      return {
        id: q.id,
        question: DOMPurify.sanitize(q.question),
        userAnswer: user?.ans || null,
        correctAnswer: correct,
        isCorrect,
      };
    });

    setResults({
      score: correctCount,
      total: data.length,
      detailed,
    });
  }

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setShowConfirmSubmit(false);
    setSubmitting(true);

    setTimeout(() => {
      evaluateResults();
      setSubmitting(false);
    }, 650);
  };

  const handleRetry = () => {
    setResults(null);
    setAnswers([]);
    sessionStorage.removeItem("answers_v1");
  };

  const optionLetter = (i) => String.fromCharCode(65 + i);

  const Skeleton = () => (
    <div className="space-y-4" aria-hidden>
      {[1, 2, 3].map((n) => (
        <div key={n} className="animate-pulse bg-slate-800 rounded-lg p-4">
          <div className="h-4 bg-slate-700 rounded w-3/4 mb-3" />
          <div className="space-y-2">
            <div className="h-3 bg-slate-700 rounded w-full" />
            <div className="h-3 bg-slate-700 rounded w-5/6" />
            <div className="h-3 bg-slate-700 rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );

  if (results) {
    return (
      <main className="min-h-[60vh] p-6 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow"
          >
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Quiz Results
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Score: <span className="font-medium">{results.score}</span> /{" "}
              {results.total}
            </p>

            <div className="mt-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg p-3 bg-green-50 dark:bg-green-900/40 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-600 dark:text-slate-200">
                      Correct
                    </div>
                    <div className="text-lg font-semibold text-green-700 dark:text-green-300">
                      {results.score}
                    </div>
                  </div>
                  <FaCheck className="text-green-600 dark:text-green-300" />
                </div>

                <div className="rounded-lg p-3 bg-amber-50 dark:bg-amber-900/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-600 dark:text-slate-200">
                      Total
                    </div>
                    <div className="text-lg font-semibold text-amber-700 dark:text-amber-200">
                      {results.total}
                    </div>
                  </div>
                  <div className="text-amber-600">📘</div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {results.detailed.map((r, idx) => (
                <div
                  key={r.id}
                  className={`rounded-lg p-4 border ${
                    r.isCorrect
                      ? "border-green-400 bg-green-50 dark:bg-transparent"
                      : "border-red-400 bg-red-50 dark:bg-transparent"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-xl font-semibold text-slate-900 dark:text-white">
                      {idx + 1}.
                    </div>
                    <div
                      className="prose prose-sm max-w-none text-slate-800 dark:text-slate-200"
                      dangerouslySetInnerHTML={{ __html: r.question }}
                    />
                  </div>

                  <div className="mt-3 flex gap-4 flex-wrap">
                    <div className="text-sm">
                      <div className="text-xs text-slate-500">Your answer</div>
                      <div
                        className={`mt-1 font-medium ${
                          r.isCorrect ? "text-green-700" : "text-red-600"
                        }`}
                      >
                        {r.userAnswer ?? "No answer"}
                      </div>
                    </div>

                    {!r.isCorrect && (
                      <div className="text-sm">
                        <div className="text-xs text-slate-500">
                          Correct answer
                        </div>
                        <div className="mt-1 font-medium text-green-700">
                          {r.correctAnswer}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleRetry}
                className="px-4 py-2 rounded-lg bg-sky-600 text-white shadow hover:bg-sky-700 transition"
              >
                Try Again
              </button>
              <button
                onClick={() => {
                  setResults(null);
                }}
                className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700"
              >
                Review Answers
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-[60vh] p-6 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="sticky top-4 z-30">
            <div className="rounded-full bg-white/70 dark:bg-slate-800/80 backdrop-blur px-4 py-3 shadow flex items-center justify-between gap-4 border border-slate-200/50 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  {subject?.toUpperCase() || "Subject"} —{" "}
                  {type?.toUpperCase() || "TYPE"} — {year || ""}
                </div>

                <div className="h-3 w-48 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-sky-500 to-indigo-600 transition-all"
                    style={{
                      width: `${
                        totalQuestions
                          ? Math.round((answeredCount / totalQuestions) * 100)
                          : 0
                      }%`,
                    }}
                  />
                </div>

                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {answeredCount} / {totalQuestions} answered
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setAnswers([]);
                    sessionStorage.removeItem("answers_v1");
                  }}
                  className="px-3 py-1 rounded-md text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Clear answers
                </button>

                <button
                  onClick={() => setShowConfirmSubmit(true)}
                  disabled={!canSubmit || submitting}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    canSubmit
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  } transition`}
                >
                  {submitting ? (
                    <FaSpinner className="animate-spin inline-block mr-2" />
                  ) : null}
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            {loading ? (
              <Skeleton />
            ) : error ? (
              <div className="rounded-lg p-6 bg-white dark:bg-slate-800 shadow text-center">
                <div className="text-red-600 font-semibold mb-2">Error</div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  {error}
                </div>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={fetchData}
                    className="px-4 py-2 bg-sky-600 text-white rounded-md"
                  >
                    Retry
                  </button>
                  <button
                    onClick={() => {
                      setError(null);
                    }}
                    className="px-4 py-2 border rounded-md"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ) : data.length === 0 ? (
              <div className="rounded-lg p-6 bg-white/60 dark:bg-slate-800/60 text-center">
                <div className="text-slate-600 dark:text-slate-300">
                  No questions found for the selected filters.
                </div>
              </div>
            ) : (
              <>
                <motion.article
                  id="question-card"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-300">
                        Question {currentIndex + 1} of {totalQuestions}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                        <span className="mr-2 text-indigo-600 dark:text-indigo-300 font-bold">
                          {currentIndex + 1}.
                        </span>
                        <span
                          className="prose prose-sm max-w-none text-slate-800 dark:text-slate-200"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              data[currentIndex].question
                            ),
                          }}
                        />
                      </div>
                      <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        Choose the correct option below.
                      </div>
                    </div>

                    <div className="ml-auto flex flex-col gap-2 items-end">
                      <div className="text-sm text-slate-500 dark:text-slate-300">
                        Answered
                      </div>
                      <div className="text-lg font-semibold">
                        {answers.find((a) => a.id === data[currentIndex].id)
                          ? "Yes"
                          : "No"}
                      </div>
                    </div>
                  </div>

                  <fieldset
                    className="mt-6 space-y-3"
                    aria-labelledby={`question-${data[currentIndex].id}`}
                  >
                    {Object.values(data[currentIndex].option).map(
                      (opt, idx) => {
                        const checked =
                          answers.find((a) => a.id === data[currentIndex].id)
                            ?.ans === opt;
                        return (
                          <label
                            key={idx}
                            className={`block p-3 rounded-lg cursor-pointer border transition ${
                              checked
                                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/40 shadow"
                                : "border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600"
                            }`}
                          >
                            <input
                              type="radio"
                              name={`opt-${data[currentIndex].id}`}
                              value={opt}
                              checked={checked}
                              onChange={(e) =>
                                setAnswerFor(
                                  data[currentIndex].id,
                                  e.target.value
                                )
                              }
                              className="sr-only"
                            />
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-50 font-semibold">
                                {optionLetter(idx)}
                              </div>
                              <div
                                className="prose max-w-none text-slate-800 dark:text-slate-200"
                                dangerouslySetInnerHTML={{
                                  __html: DOMPurify.sanitize(opt),
                                }}
                              />
                            </div>
                          </label>
                        );
                      }
                    )}
                  </fieldset>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prev}
                        disabled={currentIndex === 0}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                          currentIndex === 0
                            ? "bg-slate-500 text-slate-800 cursor-not-allowed"
                            : "bg-white border shadow text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        <FaChevronLeft /> Prev
                      </button>
                      <button
                        onClick={next}
                        disabled={currentIndex === totalQuestions - 1}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                          currentIndex === totalQuestions - 1
                            ? "bg-slate-500 text-slate-800 cursor-not-allowed"
                            : "bg-white border shadow text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        Next <FaChevronRight />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Answered:{" "}
                        <span className="font-medium">{answeredCount}</span>
                      </div>
                      <div>
                        <button
                          onClick={() => setCurrentIndex(0)}
                          className="px-3 py-2 rounded-md border hover:bg-slate-50"
                        >
                          Jump start
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowConfirmSubmit(true)}
                      disabled={!canSubmit}
                      className={`px-4 py-2 rounded-2xl ${
                        canSubmit
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-slate-200 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      Submit Answers
                    </button>

                    <button
                      onClick={() => {
                        setAnswers([]);
                        sessionStorage.removeItem("answers_v1");
                      }}
                      className="px-4 py-2 rounded-2xl border"
                    >
                      Clear
                    </button>
                  </div>

                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    Tip: Use ← → to navigate, ⌘/Ctrl + Enter to submit
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <AnimatePresence>
          {showConfirmSubmit && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Submit answers?
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  You're about to submit your answers. You can review after
                  submitting.
                </p>

                <div className="mt-4 flex justify-end gap-3">
                  <button
                    onClick={() => setShowConfirmSubmit(false)}
                    className="px-4 py-2 rounded-md border"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 rounded-md bg-emerald-600 text-white"
                  >
                    Submit
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
