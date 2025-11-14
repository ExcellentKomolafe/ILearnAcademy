import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./Footer";
import image from "./assets/image-3.jpg"
import { FaGraduationCap, FaChalkboardTeacher, FaLaptopCode, FaBook } from "react-icons/fa";

export default function About() {
  const sections = [
    {
      title: "Overview",
      content:
        "Intelligent Learners (iLearn) Academy is an online tutoring platform providing high-quality, accessible education to students in Nigeria and abroad. Its mission is to foster positive learning mindsets, empower students academically, and introduce them to Jesus Christ as a source of personal transformation.",
      icon: <FaGraduationCap size={28} className="text-sky-500" />,
    },
    {
      title: "Mission & Vision",
      content:
        "Mission: Offer affordable, personalized online tutoring while helping students develop a positive mindset.\n\nVision: Enable students to excel academically and personally, guided by faith and purpose.",
      icon: <FaChalkboardTeacher size={28} className="text-indigo-500" />,
    },
    {
      title: "Objectives",
      content:
        "• Improve student performance in core subjects.\n• Increase access to quality education.\n• Provide tailored learning experiences.\n• Enhance engagement through interactive sessions.\n• Equip students for future academic and professional success.",
      icon: <FaLaptopCode size={28} className="text-yellow-500" />,
    },
    {
      title: "Target Audience",
      content:
        "Primary and secondary school students, exam candidates (WAEC, NECO, JAMB), parents seeking support for children, and schools wanting supplementary education services.",
      icon: <FaBook size={28} className="text-pink-500" />,
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white font-sans">
        <section
          className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-cover bg-center relative"
          style={{
            backgroundImage:
              `url(${image})`,
          }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-4 max-w-3xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            iLearn Academy – Transforming Minds, Shaping Futures
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-100 font-bold max-w-2xl"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Accessible online tutoring for students in Nigeria and beyond, combining academic excellence with personal growth.
          </motion.p>
        </section>

        {/* Sections */}
        <section className="max-w-7xl mx-auto py-16 px-6 space-y-12">
          {sections.map((sec, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="shrink-0 bg-gray-800 p-6 rounded-3xl shadow-lg text-center md:text-left">
                {sec.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{sec.title}</h2>
                <p className="text-gray-300 whitespace-pre-line">{sec.content}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Services & Activities */}
        <section className="bg-gray-800 py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Our Services & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Subject-specific Tutoring", icon: <FaChalkboardTeacher className="text-indigo-500" size={36} /> },
              { title: "Exam Preparation", icon: <FaGraduationCap className="text-sky-500" size={36} /> },
              { title: "Homework Assistance", icon: <FaBook className="text-pink-500" size={36} /> },
              { title: "Group Tutoring Sessions", icon: <FaLaptopCode className="text-yellow-500" size={36} /> },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-gray-900 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Implementation Plan & Team */}
        <section className="max-w-7xl mx-auto py-16 px-6 space-y-8">
          <motion.div
            className="bg-gray-800 p-6 rounded-3xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Implementation Plan</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Platform development and testing</li>
              <li>Curriculum creation</li>
              <li>Tutor recruitment and training</li>
              <li>Marketing and outreach</li>
              <li>Pilot program launch & full-scale launch</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-3xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-4">Team</h2>
            <p className="text-gray-300">
              Our team includes a Project Director, Curriculum Manager, Technology Manager, Tutor Coordinator, Marketing Manager, Finance Manager, and qualified tutors.
            </p>
          </motion.div>
        </section>

        {/* Expected Impact */}
        <section className="bg-gray-900 py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Expected Impact</h2>
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              "Improved academic results",
              "Greater access to quality education",
              "Increased student motivation",
              "Development of future-ready skills",
              "Contribution to Nigeria’s human capital growth",
            ].map((impact, i) => (
              <motion.li
                key={i}
                className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {impact}
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
