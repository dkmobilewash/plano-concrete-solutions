"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { cn, PHONE_NUMBER, PHONE_TEL } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const serviceLinks = [
  { name: "Concrete Services", href: "/services", featured: true },
  { name: "Driveways", href: "/services/driveways" },
  { name: "Patios", href: "/services/patios" },
  { name: "Pool Decks", href: "/services/pool-decks" },
  { name: "Block Walls", href: "/services/block-walls" },
  { name: "Foundations & Slabs", href: "/services/foundations-slabs" },
  { name: "Commercial Concrete", href: "/services/commercial-concrete" },
];

const areaLinks = [
  { name: "West Plano", href: "/service-areas/west-plano" },
  { name: "East Plano", href: "/service-areas/east-plano" },
  { name: "North Plano", href: "/service-areas/north-plano" },
  { name: "Downtown Plano", href: "/service-areas/downtown-plano" },
  { name: "Legacy West", href: "/service-areas/legacy-west" },
  { name: "Willow Bend", href: "/service-areas/willow-bend" },
  { name: "Deerfield", href: "/service-areas/deerfield" },
  { name: "Preston Meadow", href: "/service-areas/preston-meadow" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleDropdownEnter(name: string) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(name);
  }

  function handleDropdownLeave() {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }

  function toggleDropdown(name: string) {
    setOpenDropdown((prev) => (prev === name ? null : name));
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 shrink-0">
              <span
                className={cn(
                  "font-display text-2xl font-bold transition-colors duration-300",
                  scrolled ? "text-primary" : "text-white"
                )}
              >
                Plano Concrete
              </span>
              <span className="font-display text-2xl font-bold text-accent">
                Solutions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("services")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("services")}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide rounded-lg transition-colors duration-200 min-h-[44px] cursor-pointer",
                    scrolled
                      ? "text-dark hover:text-accent"
                      : "text-white hover:text-accent"
                  )}
                  aria-expanded={openDropdown === "services"}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      openDropdown === "services" && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute left-0 top-full pt-2 transition-all duration-200",
                    openDropdown === "services"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div className="w-72 rounded-lg bg-white shadow-lg ring-1 ring-black/5 p-4">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpenDropdown(null)}
                        className={cn(
                          "block px-3 py-2.5 rounded-md text-sm transition-colors duration-150",
                          link.featured
                            ? "font-display font-semibold text-accent hover:bg-light border-b border-border mb-2 pb-3"
                            : "font-body text-dark hover:bg-light hover:text-accent"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("areas")}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleDropdown("areas")}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide rounded-lg transition-colors duration-200 min-h-[44px] cursor-pointer",
                    scrolled
                      ? "text-dark hover:text-accent"
                      : "text-white hover:text-accent"
                  )}
                  aria-expanded={openDropdown === "areas"}
                  aria-haspopup="true"
                >
                  Service Areas
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      openDropdown === "areas" && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute left-0 top-full pt-2 transition-all duration-200",
                    openDropdown === "areas"
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div className="w-80 rounded-lg bg-white shadow-lg ring-1 ring-black/5 p-4">
                    <div className="grid grid-cols-2 gap-1">
                      {areaLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-3 py-2.5 rounded-md text-sm font-body text-dark hover:bg-light hover:text-accent transition-colors duration-150"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <Link
                href="/gallery"
                className={cn(
                  "px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide rounded-lg transition-colors duration-200 min-h-[44px] flex items-center",
                  scrolled
                    ? "text-dark hover:text-accent"
                    : "text-white hover:text-accent"
                )}
              >
                Gallery
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                className={cn(
                  "px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide rounded-lg transition-colors duration-200 min-h-[44px] flex items-center",
                  scrolled
                    ? "text-dark hover:text-accent"
                    : "text-white hover:text-accent"
                )}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right side: Phone CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Phone CTA */}
              <a
                href={PHONE_TEL}
                className="hidden sm:flex items-center gap-2 text-accent font-display font-bold min-h-[44px] hover:text-accent-dark transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm lg:text-base">{PHONE_NUMBER}</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "lg:hidden p-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors duration-200 cursor-pointer",
                  scrolled
                    ? "text-dark hover:bg-light"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
