"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 style={{ fontSize: "2.2rem", letterSpacing: "-0.02em" }}>{title}</h2>
      <p style={{ marginTop: 18, maxWidth: 820, opacity: 0.82, fontSize: "1.05rem", lineHeight: 1.7 }}>
        {children}
      </p>
    </motion.section>
  );
}
