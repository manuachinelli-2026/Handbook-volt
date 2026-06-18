'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// ─── Shared transition presets ───────────────────────────────────────────────

const transitions = {
  default: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  slow:    { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] },
  spring:  { type: 'spring', stiffness: 60, damping: 20 },
}

const viewport = { once: true, margin: '-8%' }

// ─── FadeUp ──────────────────────────────────────────────────────────────────
// The most common Apple-style reveal: fades in while rising from below.

export function FadeUp({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ...transitions.default, delay }}
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}

// ─── FadeIn ──────────────────────────────────────────────────────────────────
// Pure opacity fade — good for images, backgrounds, large blocks.

export function FadeIn({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ...transitions.slow, delay }}
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}

// ─── SlideIn ─────────────────────────────────────────────────────────────────
// Slides in from left or right — good for two-column layouts.

export function SlideIn({ children, from = 'left', delay = 0, className }) {
  const x = from === 'left' ? -48 : 48
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ...transitions.default, delay }}
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}

// ─── ScaleIn ─────────────────────────────────────────────────────────────────
// Scales up from slightly smaller — good for cards, screenshots, images.

export function ScaleIn({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ...transitions.slow, delay }}
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}

// ─── Stagger ─────────────────────────────────────────────────────────────────
// Wrap a list with <Stagger> and each direct child auto-staggers.
// Each child should be a <StaggerItem>.

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: transitions.default },
}

export function Stagger({ children, className }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
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

// ─── StickyScroll ────────────────────────────────────────────────────────────
// Apple-style sticky section: the container pins to the viewport while
// you scroll through it, and progress (0→1) is passed to the render prop
// so you can drive any transformation based on scroll position.
//
// Usage:
//   <StickyScroll>
//     {(progress) => <YourContent progress={progress} />}
//   </StickyScroll>
//
// `scrollHeight` controls how tall the scrollable area is (default: 300vh).

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

// ─── ParallaxBlock ───────────────────────────────────────────────────────────
// Moves at a slower rate than the scroll — good for background images.
// `speed` > 0 = slower (moves up less), < 0 = faster (moves up more).

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
