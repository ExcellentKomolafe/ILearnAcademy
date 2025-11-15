import { motion } from "framer-motion";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";
import Footer from "../Footer"
import bgImage3 from "../assets/student-image-1.jpg";
import {
  FaQuestionCircle,
  FaFilter,
  FaChartLine,
  FaBookOpen,
  FaCheckCircle,
  FaBolt,
  FaBullseye,
  FaWhatsapp,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Free O'level Past Questions",
    desc: "Access a vast collection of past questions to help you prepare for your exams without any cost.",
    icon: <FaQuestionCircle size={28} />,
  },
  {
    id: 2,
    title: "Targeted Practice",
    desc: "Easily filter questions by subject, type, and year to focus on specific areas where you need to improve.",
    icon: <FaFilter size={28} />,
  },
  {
    id: 3,
    title: "Instant Results & Feedback",
    desc: "Submit your answers and get immediate results, including a detailed breakdown of correct and incorrect answers.",
    icon: <FaChartLine size={28} />,
  },
  {
    id: 4,
    title: "Comprehensive Preparation",
    desc: "Our platform provides a complete toolset to test your knowledge and build confidence before the real exam.",
    icon: <FaBookOpen size={28} />,
  },
];

const steps = [
  {
    id: 1,
    title: "Select Subject & Year",
    desc: "Choose your subject and exam year to filter relevant questions quickly.",
    icon: <FaCheckCircle size={28} />,
  },
  {
    id: 2,
    title: "Practice Questions",
    desc: "Solve curated questions to build your knowledge and confidence.",
    icon: <FaBolt size={28} />,
  },
  {
    id: 3,
    title: "Get Instant Feedback",
    desc: "Submit answers and receive immediate scoring with detailed explanations.",
    icon: <FaBullseye size={28} />,
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <section
        className="relative min-h-[80vh] grid place-content-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage3})`,
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
          <motion.h1
            className="text-3xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ace Your O'level Exams with Confidence
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-slate-200 max-w-2xl drop-shadow-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Self-paced learning, curated past questions, instant scoring, and more — all designed for students.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/signup"
              className="bg-linear-to-r from-sky-600 to-indigo-600 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
            
             < Link to="/about"
              className="bg-white/10 border border-white/10 px-6 py-3 rounded-2xl text-white hover:bg-white/20 transition-colors"
            >
              About Us
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-900 overflow-x-hidden py-12">
        <div className="max-full mx-auto flex flex-wrap justify-around gap-8 text-center text-white">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">50k+</span>
            <span className="text-gray-400">Questions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">100%</span>
            <span className="text-gray-400">Free Access</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">
              <FaWhatsapp />
            </span>
            <span className="text-gray-400">Free Live Classes</span>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Key Features
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything you need to ace your exams. Fast, simple, and student-centric.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="hover:scale-105 transition-transform"
              >
                <Card title={f.title} about={f.desc} icon={f.icon} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">How It Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow 3 simple steps to start practicing and tracking your results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-4xl mb-4 text-sky-500">{step.icon}</div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <Footer></Footer>
    </>
  );
}
