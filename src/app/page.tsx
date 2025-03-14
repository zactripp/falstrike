import Link from "next/link";
import {
  ChevronRight,
  Shield,
  Plane,
  Zap,
  Globe,
  Mail,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 font-mono">
      {/* Navigation */}
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold tracking-tighter">
                FALSTRIKE
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-sm hover:text-white transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="#capabilities"
                className="text-sm hover:text-white transition-colors"
              >
                CAPABILITIES
              </Link>
              <Link
                href="#technology"
                className="text-sm hover:text-white transition-colors"
              >
                TECHNOLOGY
              </Link>
              <Link
                href="#contact"
                className="text-sm hover:text-white transition-colors"
              >
                CONTACT
              </Link>
            </div>
            <Button
              variant="outline"
              className="hidden md:flex border-zinc-700 hover:bg-zinc-800 hover:text-white text-black"
            >
              REQUEST ACCESS
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 border border-zinc-700 text-xs bg-zinc-900/50 rounded-sm">
                ADVANCED AEROSPACE SOLUTIONS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                NEXT GENERATION
                <br />
                <span className="text-red-600">AERONAUTICS</span>
                <br />
                TECHNOLOGY
              </h1>
              <p className="text-zinc-400 max-w-md">
                Pioneering the future of defense and aerospace with cutting-edge
                systems, advanced materials, and proprietary flight technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  EXPLORE CAPABILITIES
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-800 text-black"
                >
                  PARTNER WITH US
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative h-[400px]">
              <div className="absolute inset-0 bg-grid-white bg-[size:20px_20px] z-0" />
              <div className="w-full h-full rounded-md opacity-80 bg-zinc-700/30 flex items-center justify-center border border-zinc-600">
                <div className="text-zinc-400 text-center p-4">
                  <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <p className="text-lg">Advanced Aircraft Visualization</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 backdrop-blur-sm rounded border border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-xs text-zinc-400">
                    SYSTEM STATUS: OPERATIONAL
                  </span>
                </div>
                <div className="mt-2 text-xs text-zinc-500 font-mono">
                  {"// FALSTRIKE-AX7 PLATFORM READY FOR DEPLOYMENT"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              ABOUT FALSTRIKE
            </h2>
            <p className="text-zinc-400">
              Founded on principles of innovation and excellence, Falstrike
              Aeronautics develops advanced aerospace systems for defense and
              commercial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-zinc-800 rounded-md bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
              <div className="w-12 h-12 bg-red-900/20 rounded-md flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">DEFENSE SYSTEMS</h3>
              <p className="text-zinc-400 text-sm">
                Cutting-edge aerospace technology designed for modern defense
                requirements with unmatched reliability.
              </p>
            </div>

            <div className="p-6 border border-zinc-800 rounded-md bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
              <div className="w-12 h-12 bg-red-900/20 rounded-md flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">ADVANCED AIRCRAFT</h3>
              <p className="text-zinc-400 text-sm">
                Next-generation aircraft platforms with proprietary aerodynamics
                and materials science.
              </p>
            </div>

            <div className="p-6 border border-zinc-800 rounded-md bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
              <div className="w-12 h-12 bg-red-900/20 rounded-md flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">PROPULSION TECH</h3>
              <p className="text-zinc-400 text-sm">
                Revolutionary propulsion systems that deliver unprecedented
                efficiency and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        id="capabilities"
        className="py-20 border-b border-zinc-800 bg-zinc-900/30"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                CAPABILITIES
              </h2>
              <p className="text-zinc-400 mb-6">
                Our integrated systems approach combines hardware excellence
                with advanced software solutions to deliver complete aerospace
                platforms.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-red-600" />
                  <div>
                    <h3 className="font-bold">Autonomous Flight Systems</h3>
                    <p className="text-zinc-500 text-sm">
                      Advanced AI-driven flight control
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-red-600" />
                  <div>
                    <h3 className="font-bold">Composite Materials</h3>
                    <p className="text-zinc-500 text-sm">
                      Lightweight, high-strength structures
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-red-600" />
                  <div>
                    <h3 className="font-bold">Integrated Avionics</h3>
                    <p className="text-zinc-500 text-sm">
                      Seamless hardware-software integration
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-red-600" />
                  <div>
                    <h3 className="font-bold">Secure Communications</h3>
                    <p className="text-zinc-500 text-sm">
                      Encrypted, jamming-resistant data links
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-zinc-800 hover:bg-zinc-700 text-white">
                VIEW FULL SPECIFICATIONS
              </Button>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-grid-white bg-[size:20px_20px] z-0" />
              <div className="w-full h-[500px] rounded-md border border-zinc-800 bg-zinc-800/30 flex items-center justify-center">
                <div className="text-zinc-400 text-center p-6 relative z-10">
                  <Plane className="h-20 w-20 text-red-600 mx-auto mb-6" />
                  <p className="text-xl mb-2">Falstrike Capabilities</p>
                  <p className="text-sm text-zinc-500 max-w-md mx-auto">
                    Advanced aerospace systems with cutting-edge technology
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
            TECHNOLOGY
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-md border border-zinc-800 group">
              <div className="w-full h-[300px] bg-zinc-800/50 group-hover:bg-zinc-800/70 transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold mb-2">PROPULSION SYSTEMS</h3>
                <p className="text-zinc-400 text-sm max-w-md">
                  Next-generation engines with unprecedented thrust-to-weight
                  ratios and fuel efficiency.
                </p>
                <Button
                  variant="link"
                  className="text-red-500 hover:text-red-400 p-0 mt-2"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-md border border-zinc-800 group">
              <div className="w-full h-[300px] bg-zinc-800/50 group-hover:bg-zinc-800/70 transition-colors"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold mb-2">AVIONICS & CONTROL</h3>
                <p className="text-zinc-400 text-sm max-w-md">
                  Integrated flight systems with advanced sensor fusion and
                  autonomous capabilities.
                </p>
                <Button
                  variant="link"
                  className="text-red-500 hover:text-red-400 p-0 mt-2"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 border border-zinc-800 rounded-md bg-zinc-900/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  RESEARCH PARTNERSHIPS
                </h3>
                <p className="text-zinc-400 max-w-xl">
                  Falstrike collaborates with leading research institutions and
                  defense contractors to push the boundaries of aerospace
                  technology.
                </p>
              </div>
              <Button className="whitespace-nowrap bg-red-600 hover:bg-red-700">
                BECOME A PARTNER
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 border-b border-zinc-800 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              GLOBAL PRESENCE
            </h2>
            <p className="text-zinc-400">
              With operations across multiple continents, Falstrike delivers
              aerospace solutions to partners worldwide.
            </p>
          </div>

          <div className="relative h-[400px] rounded-md border border-zinc-800 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white bg-[size:20px_20px] z-0" />
            <div className="w-full h-full bg-zinc-900/70 relative">
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50" />

            {/* Location markers */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-600 rounded-full animate-ping" />
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-600 rounded-full" />

            <div className="absolute top-1/3 left-2/3 w-3 h-3 bg-red-600 rounded-full animate-ping" />
            <div className="absolute top-1/3 left-2/3 w-2 h-2 bg-red-600 rounded-full" />

            <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-red-600 rounded-full animate-ping" />
            <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-red-600 rounded-full" />

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/70 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">OPERATIONAL CENTERS</h3>
                  <p className="text-zinc-400 text-sm">
                    North America • Europe • Asia Pacific
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-800 text-sm text-zinc-200"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  VIEW LOCATIONS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                CONTACT
              </h2>
              <p className="text-zinc-400 mb-8">
                Connect with our team to discuss how Falstrike Aeronautics can
                meet your aerospace and defense needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-zinc-400">inquiries@falstrike.com</p>
                    <p className="text-zinc-500 text-sm mt-1">
                      For general inquiries and information
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Secure Communications</h3>
                    <p className="text-zinc-400">defense@falstrike.com</p>
                    <p className="text-zinc-500 text-sm mt-1">
                      For defense partners and secure inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Headquarters</h3>
                    <p className="text-zinc-400">
                      1000 Aerospace Drive, Phoenix, AZ 85001
                    </p>
                    <p className="text-zinc-500 text-sm mt-1">
                      Main corporate offices and R&D center
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border border-zinc-800 rounded-md bg-zinc-900/30">
              <h3 className="text-xl font-bold mb-4">REQUEST INFORMATION</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-zinc-400 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-zinc-400 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-400 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-zinc-400 mb-1"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-zinc-700 rounded"
                  />
                  <label
                    htmlFor="consent"
                    className="ml-2 block text-sm text-zinc-400"
                  >
                    I consent to Falstrike processing my data for the purpose of
                    responding to my inquiry.
                  </label>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">
                  SUBMIT REQUEST
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Shield className="h-5 w-5 text-red-600" />
              <span className="text-lg font-bold tracking-tighter">
                FALSTRIKE AERONAUTICS
              </span>
            </div>

            <div className="flex gap-8 mb-4 md:mb-0">
              <Link
                href="#about"
                className="text-xs text-zinc-400 hover:text-white transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="#capabilities"
                className="text-xs text-zinc-400 hover:text-white transition-colors"
              >
                CAPABILITIES
              </Link>
              <Link
                href="#technology"
                className="text-xs text-zinc-400 hover:text-white transition-colors"
              >
                TECHNOLOGY
              </Link>
              <Link
                href="#contact"
                className="text-xs text-zinc-400 hover:text-white transition-colors"
              >
                CONTACT
              </Link>
            </div>

            <div className="text-xs text-zinc-500">
              &copy; {new Date().getFullYear()} Falstrike Aeronautics. All
              rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
