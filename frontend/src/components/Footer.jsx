import React from 'react';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-white">FPS My</span>
            </div>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              The ultimate FPS optimization utility for competitive gamers. 
              Boost performance, eliminate stuttering, and dominate the competition.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">System Requirements</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Supported Games</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Discord Community</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Bug Reports</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Feature Requests</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-zinc-400 text-sm">
            © 2025 FPS My. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;