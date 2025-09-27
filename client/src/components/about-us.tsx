export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4" data-testid="about-title">
            About A2S – Aesthetics to Spaces
          </h2>
          <p className="text-2xl text-slate-600 font-medium mb-8" data-testid="about-subtitle">
            Because every space deserves to feel like home.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-8 md:p-12 mb-12">
            <div className="prose prose-lg mx-auto text-slate-700">
              <p className="text-lg leading-relaxed mb-6">
                At A2S, we're more than just a prop-tech platform—we're dream enablers. We know that finding the right space, shaping it into something beautiful, and making it truly yours can be overwhelming. Too often, people juggle between agents, designers, and vendors, losing time, money, and peace of mind along the way.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                We set out to change that.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                With A2S, you can explore verified properties, design your rooms virtually, consult experts, and even manage your space with the latest technology—all in one place. Whether it's the first apartment you move into, the home where you'll raise a family, or an office where your ideas will grow, we're here to make the journey simple, transparent, and joyful.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-300 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg" data-testid="mission-card">
              <h3 className="text-2xl font-bold text-purple-700 mb-4" data-testid="mission-title">
                Our Mission
              </h3>
              <p className="text-slate-700 leading-relaxed" data-testid="mission-description">
                Our mission is to blend technology with heart—so that every step of discovering, designing, or managing a space feels inspiring, effortless, and trustworthy.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-300 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg" data-testid="vision-card">
              <h3 className="text-2xl font-bold text-blue-700 mb-4" data-testid="vision-title">
                Our Vision
              </h3>
              <p className="text-slate-700 leading-relaxed" data-testid="vision-description">
                We dream of a future where everyone can create spaces that reflect who they are, where beauty meets function, and where sustainability is second nature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}