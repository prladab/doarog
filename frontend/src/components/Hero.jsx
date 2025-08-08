import React from 'react';
import { Button } from './ui/button';
import { Download, Play, Zap, Target, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Boost FPS.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Cut Latency.
          </span>
          <br />
          Play Smooth.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          FPS My optimizes graphics, drivers, and processes in one click.
          <br />
          Get stable frame times and eliminate stuttering for competitive gaming.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-3" />
            Download for Windows
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 px-8 py-4 text-lg"
          >
            <Play className="w-5 h-5 mr-3" />
            See in Action
          </Button>
        </div>

        {/* Performance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-zinc-200">+35-120% FPS Boost</span>
          </div>
          <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
            <Target className="w-4 h-4 text-green-400" />
            <span className="text-zinc-200">Anti-Stutter Technology</span>
          </div>
          <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-zinc-200">Low CPU Overhead</span>
          </div>
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;