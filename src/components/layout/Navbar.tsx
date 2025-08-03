'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [insuranceDropdown, setInsuranceDropdown] = useState(false)
  const pathname = usePathname()

  // add/remove scroll shadow
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menus on route change
  useEffect(() => {
    setIsOpen(false)
    setInsuranceDropdown(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ]
  const insuranceLinks = [
    { href: '/home-insurance', label: 'Home Insurance' },
    { href: '/auto-insurance', label: 'Auto Insurance' },
    { href: '/renter-insurance', label: 'Renters Insurance' },
    { href: '/bop-insurance', label: 'Business Insurance' },
    { href: '/motorcycle-insurance', label: 'Motorcycle Insurance' },
  ]
  const isActive = (href: string) => pathname === href

  // split Contact Us out
  const mainLinks = navLinks.filter(l => l.label !== 'Contact Us')
  const contactLink = navLinks.find(l => l.label === 'Contact Us')!

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container-custom flex items-center justify-between py-1">
        <Link href="/" className="relative z-20">
          <Image src='/logo/logo.png' alt="Cherries Insurance" width={200} height={60} />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {mainLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium transition-colors ${
                isActive(href) ? 'text-primary-600' : 'hover:text-primary-600 text-neutral-800'
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Desktop dropdown */}
          <div className="relative">
            <button
              onClick={() => setInsuranceDropdown(op => !op)}
              className="flex items-center gap-1 font-medium text-neutral-800 hover:text-primary-600 transition-colors"
            >
              Insurance
              <ChevronDown className={`w-4 h-4 transition-transform ${insuranceDropdown ? 'rotate-180' : ''}`} />
            </button>
            {insuranceDropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg animate-fade-in">
                <div className="p-2 flex flex-col gap-1">
                  {insuranceLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive(href)
                          ? 'bg-primary-50 text-primary-600'
                          : 'hover:bg-neutral-50 text-neutral-700 hover:text-primary-600'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href={contactLink.href}
            className={`font-medium transition-colors ${
              isActive(contactLink.href) ? 'text-primary-600' : 'hover:text-primary-600 text-neutral-800'
            }`}
          >
            {contactLink.label}
          </Link>

          <Link href="/quote" className="btn btn-primary ml-4">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 z-20"
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-neutral-800" /> : <Menu className="w-6 h-6 text-neutral-800" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full pt-6 animate-fade-in">
          <div className="container-custom flex flex-col gap-4 pb-6">
            {mainLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-2 font-medium transition-colors ${
                  isActive(href) ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Mobile dropdown */}
            <div>
              <button
                onClick={() => setInsuranceDropdown(op => !op)}
                className="flex w-full justify-between items-center py-2 font-medium text-neutral-800"
              >
                Insurance
                <ChevronDown className={`w-5 h-5 transition-transform ${insuranceDropdown ? 'rotate-180' : ''}`} />
              </button>
              {insuranceDropdown && (
                <div className="pl-4 flex flex-col gap-2 mt-2">
                  {insuranceLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`py-2 font-medium transition-colors ${
                        isActive(href) ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={contactLink.href}
              className={`py-2 font-medium transition-colors ${
                isActive(contactLink.href) ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
              }`}
            >
              {contactLink.label}
            </Link>

            <Link href="/quote" className="btn btn-primary w-full text-center mt-4">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
