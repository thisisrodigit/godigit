"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
      style={{ paddingTop: 140 }}
    >
      <motion.h1
        initial={{ y: 42, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.25, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontSize: "4.2rem", lineHeight: 1.05, maxWidth: 980, letterSpacing: "-0.04em" }}
      >
        Digital infrastructure <span className="blue">built to scale</span>
      </motion.h1>

      <motion.p
        initial={{ y: 28, opacity: 0, filter: "blur(6px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.55, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginTop: 26, maxWidth: 720, opacity: 0.82, fontSize: "1.15rem", lineHeight: 1.7 }}
      >
        Websites, software and automation systems designed for performance.
      </motion.p>

      <motion.div
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}
      >
        <a
          href="#"
          style={{
            padding: "14px 18px",
            borderRadius: 14,
            background: "#0473a8",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          Start a project
        </a>
        <a
          href="#"
          style={{
            padding: "14px 18px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.14)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            opacity: 0.9
          }}
        >
          See work
        </a>
      </motion.div>
    </motion.section>
  );
}
