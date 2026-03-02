import React from 'react';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  Play, 
  Gift, 
  Share2, 
  Mail, 
  Users,
  BookOpen,
  CalendarCheck,
  Smartphone,
  Copy,
  Linkedin,
  Twitter,
  User
} from 'lucide-react';
import { motion } from 'motion/react';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#f6f6f8] text-slate-900 font-sans antialiased">
      {/* Navigation */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 md:px-20 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4 text-blue-600">
          <div className="size-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">WebinarPro</h2>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-slate-600 text-sm font-medium hover:text-blue-600 transition-colors" href="#">My Webinars</a>
            <a className="text-slate-600 text-sm font-medium hover:text-blue-600 transition-colors" href="#">Resources</a>
          </nav>
          <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 border border-blue-600/20">
            <User size={20} />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Success Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-600 text-white rounded-xl p-6 md:p-10 mb-8 flex flex-col items-center text-center shadow-lg shadow-blue-600/20"
        >
          <div className="bg-white/20 p-3 rounded-full mb-4">
            <CheckCircle size={40} className="text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">You're Registered!</h1>
          <p className="text-blue-50 text-lg opacity-90">Check your email for details and your unique joining link.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video & Details */}
            <section className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-1">
                  <div className="relative group aspect-video bg-slate-200 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play size={32} className="text-blue-600 fill-blue-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                      Watch this 2-minute video for next steps
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="text-[#f97316] font-bold text-xs uppercase tracking-widest mb-2">Live Masterclass</span>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Mastering Growth: AI Strategies for 2024</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-600">
                      <Calendar size={18} className="text-blue-600" />
                      <span className="text-sm font-medium">Wednesday, October 25th, 2023</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Clock size={18} className="text-blue-600" />
                      <span className="text-sm font-medium">10:00 AM - 11:30 AM PST</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Referral Bonus */}
            <section className="bg-gradient-to-br from-blue-600/5 to-white border-2 border-dashed border-blue-600/30 rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-orange-500/10 text-[#f97316] px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase">
                    <CheckCircle size={14} /> Bonus Offer
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Want a Free Bonus?</h3>
                  <p className="text-slate-600 mb-6">Invite 3 friends to join this webinar and unlock our exclusive <strong>'Webinar Growth Workbook'</strong> (Value $49) for free!</p>
                  <div className="space-y-4">
                    <div className="relative">
                      <input 
                        className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 pr-24 text-sm font-mono text-slate-500" 
                        readOnly 
                        type="text" 
                        value="https://webinarpro.com/ref/user749"
                      />
                      <button className="absolute right-2 top-1.5 bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-bold hover:bg-blue-700 transition-colors">Copy Link</button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="flex items-center gap-2 bg-[#0a66c2] text-white px-4 py-2 rounded-lg text-sm font-bold">
                        <Linkedin size={16} /> LinkedIn
                      </button>
                      <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-bold">
                        <Twitter size={16} /> Twitter
                      </button>
                      <button className="flex items-center gap-2 bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">
                        <Mail size={16} /> Email
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-40 h-52 bg-white rounded-lg shadow-xl border border-slate-100 p-2 transform rotate-3 flex flex-col items-center justify-center text-center">
                  <div className="bg-blue-600/10 w-full h-32 rounded mb-2 flex items-center justify-center">
                    <BookOpen size={40} className="text-blue-600" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Unlocked at 3 referrals</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Calendar Integration */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <CalendarCheck size={20} className="text-blue-600" />
                Save Your Spot
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <button className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm">
                  <Calendar size={18} className="text-blue-500" /> Google Calendar
                </button>
                <button className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm">
                  <Mail size={18} className="text-blue-600" /> Outlook
                </button>
                <button className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm">
                  <Smartphone size={18} className="text-slate-700" /> iCal / Apple
                </button>
              </div>
              <p className="mt-4 text-[11px] text-slate-400 text-center uppercase font-bold tracking-widest">Attendance boosts results by 40%</p>
            </section>

            {/* Preparation Steps */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-6">Preparation Steps</h3>
              <ul className="space-y-6">
                {[
                  { title: "Check Your Email", desc: "White-list hello@webinarpro.com to ensure you get the link." },
                  { title: "Add to Calendar", desc: "Block the time so you don't miss the live Q&A session." },
                  { title: "Join the FB Group", desc: "Introduce yourself to the community of over 5,000 pros." },
                ].map((step, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold text-sm">{idx + 1}</div>
                    <div>
                      <p className="text-sm font-bold leading-none mb-1">{step.title}</p>
                      <p className="text-xs text-slate-500">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Join Community */}
            <section className="bg-blue-600 text-white rounded-xl p-6 shadow-xl shadow-blue-600/20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">Join the Community</h3>
                <p className="text-sm text-blue-50 opacity-80 mb-6">Start networking with other attendees before we go live!</p>
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                  <Users size={20} /> Join Private FB Group
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            </section>
          </aside>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-12 bg-white mt-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-slate-400">
            <div className="size-6 opacity-50">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest">WebinarPro © 2023</span>
          </div>
          <div className="flex gap-8">
            <a className="text-slate-400 hover:text-blue-600 text-sm font-medium" href="#">Privacy Policy</a>
            <a className="text-slate-400 hover:text-blue-600 text-sm font-medium" href="#">Terms of Service</a>
            <a className="text-slate-400 hover:text-blue-600 text-sm font-medium" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
