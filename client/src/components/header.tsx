import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-[999] shadow-lg" data-testid="header">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0" data-testid="logo">
            <Link href="/">
              <a className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                A2S <span className="text-slate-600 font-normal bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">/ Aesthetics to Spaces</span>
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-slate-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                data-testid="nav-about"
              >
                About
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('plans')} 
                className="text-slate-600 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                data-testid="nav-plans"
              >
                Plans
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-slate-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                data-testid="nav-features"
              >
                Features
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('vendors')} 
                className="text-slate-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                data-testid="nav-vendors"
              >
                Vendors
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-slate-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
                data-testid="nav-contact"
              >
                Contact
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
              </button>
            </div>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Button
                onClick={() => auth.signOut()}
                variant="outline"
                className="border-2 border-red-500 text-red-600 hover:border-red-700 hover:text-red-700 hover:bg-red-50 transition-all duration-300 hover:scale-105"
                data-testid="button-logout"
              >
                Logout
              </Button>
            ) : (
              <>
                <Link href="/login">
                  <Button 
                    variant="outline" 
                    className="border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                    data-testid="button-login"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    data-testid="button-signup"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('plans')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-plans"
              >
                Plans
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('vendors')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-vendors"
              >
                Vendors
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 px-3 pt-2">
                {user ? (
                  <Button
                    onClick={() => {
                      auth.signOut();
                      setMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="border-2 border-red-500 text-red-600 hover:border-red-700 hover:text-red-700 hover:bg-red-50 transition-all duration-300"
                    data-testid="mobile-button-logout"
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="outline" className="w-full border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300" data-testid="mobile-button-login">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white transition-all duration-300" data-testid="mobile-button-signup">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
