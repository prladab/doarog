import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Settings, 
  HardDrive, 
  Trash2, 
  Gamepad2, 
  BarChart3, 
  Shield 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: 'Auto-Tuning',
      description: 'Automatic game-specific optimization profiles that adapt to your hardware configuration.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: HardDrive,
      title: 'Driver Optimizer',
      description: 'Scans and updates graphics drivers for optimal performance and compatibility.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Trash2,
      title: 'Process Cleaner',
      description: 'Intelligently closes unnecessary background processes and services during gaming.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Gamepad2,
      title: 'Game Presets',
      description: 'Pre-configured settings for popular games like CS2, Valorant, and Minecraft.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Overlay Metrics',
      description: 'Real-time FPS, 1% low, and frametime monitoring with customizable overlay.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Safe Mode',
      description: 'One-click rollback of all changes with system restore points for safety.',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Peak Performance</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Advanced optimization tools designed to maximize your gaming performance
            without compromising system stability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-300 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Features;