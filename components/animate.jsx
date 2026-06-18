'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const vp = { once: true, margin: '-5%' }
const ease = [0.22, 1, 0.36, 1]

export function FadeUp({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease, delay }}
      viewport={vp}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.1, ease, delay }}
      viewport={vp}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({ children, from = 'left', delay = 0, className }) {
  const x = from === 'left' ? -120 : 120
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, ease, delay }}
      viewport={vp}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease, delay }}
      viewport={vp}
    >
      {children}
    </motion.div>
  )
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export function Stagger({ children, className }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={vp}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

export function StickyScroll({ children, scrollHeight = '300vh' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  return (
    <div ref={ref} style={{ height: scrollHeight }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {children(scrollYProgress)}
      </div>
    </div>
  )
}

export function ParallaxBlock({ children, speed = 0.4, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}px`, `-${speed * 100}px`])
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
