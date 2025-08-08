import React from 'react';
import { Button } from './ui/button';
import { Download, ArrowRight, Star } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main CTA Content */}
        <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 relative">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-zinc-400 ml-2">Rated 4.9/5 by users</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Boost Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Gaming Performance?</span>
            </h2>
            
            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
              Join thousands of gamers who've already optimized their setup.
              Download FPS My and experience smoother gameplay today.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 group"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Download FPS My
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-zinc-600 text-zinc-300 hover:bg-zinc-800/50 px-10 py-4 text-lg backdrop-blur-sm"
            >
              View System Requirements
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">500K+</div>
              <div className="text-sm text-zinc-400">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">35-120%</div>
              <div className="text-sm text-zinc-400">Average FPS Boost</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-zinc-400">Safe & Reversible</div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-zinc-500 mt-6">
            * Results may vary depending on hardware configuration. 
            Free to try with 30-day satisfaction guarantee.
          </p>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-2xl blur-xl -z-10"></div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl -z-20"></div>
    </section>
  );
};

export default CTA;