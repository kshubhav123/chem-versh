'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Button } from './ui/button'
import { Progress } from './ui/progress'

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const products = [/* Your product data */]

  const handleNext = () => {
    gsap.to(sliderRef.current, {
      x: `-=${100}%`,
      duration: 0.5,
      ease: 'power2.inOut',
    })
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const handlePrev = () => {
    gsap.to(sliderRef.current, {
      x: `+=${100}%`,
      duration: 0.5,
      ease: 'power2.inOut',
    })
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section className="animate-section relative w-full py-12">
      {/* Products slider content */}
    </section>
  )
}