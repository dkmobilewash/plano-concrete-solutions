"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone } from "lucide-react";
import { cn, PHONE_NUMBER, PHONE_TEL } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceLinks = [
  { name: "All Concrete Services", href: "/services" },
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

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  // Reset accordion state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setServicesOpen(false);
      setAreasOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-dark/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Top bar: Phone + Close */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 text-accent font-display font-bold text-lg min-h-[44px]"
          >
            <Phone className="h-5 w-5" />
            {PHONE_NUMBER}
          </a>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-dark hover:bg-light min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-6 py-6">
          {/* Services Accordion */}
          <div className="border-b border-border pb-2 mb-2">
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className="flex items-center justify-between w-full py-3 font-display text-lg font-semibold text-dark uppercase tracking-wide min-h-[44px] cursor-pointer"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-mid transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="pb-3 pl-4 space-y-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block py-2.5 font-body text-mid hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Service Areas Accordion */}
          <div className="border-b border-border pb-2 mb-2">
            <button
              type="button"
              onClick={() => setAreasOpen((prev) => !prev)}
              className="flex items-center justify-between w-full py-3 font-display text-lg font-semibold text-dark uppercase tracking-wide min-h-[44px] cursor-pointer"
              aria-expanded={areasOpen}
            >
              Service Areas
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-mid transition-transform duration-200",
                  areasOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                areasOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="pb-3 pl-4 space-y-1">
                {areaLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block py-2.5 font-body text-mid hover:text-accent transition-colors duration-150 min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Links */}
          <Link
            href="/gallery"
            onClick={onClose}
            className="block py-3 font-display text-lg font-semibold text-dark uppercase tracking-wide border-b border-border min-h-[44px] flex items-center"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="block py-3 font-display text-lg font-semibold text-dark uppercase tracking-wide min-h-[44px] flex items-center"
          >
            Contact Us
          </Link>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full bg-accent text-white text-center font-display font-semibold text-lg py-4 rounded-lg hover:bg-accent-dark transition-colors duration-200 min-h-[44px]"
            >
              Get a Free Estimate
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
