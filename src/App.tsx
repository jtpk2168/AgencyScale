import { useState } from 'react';
import { 
  TrendingUp, 
  Calendar, 
  Clock, 
  Flame, 
  CheckCircle2, 
  Lock, 
  Star, 
  ChevronDown, 
  Diamond, 
  Rocket, 
  BarChart3, 
  Users,
  AlertTriangle,
  ArrowRight,
  UserX,
  DollarSign,
  Hourglass,
  EyeOff,
  Gift
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => (
  <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/90 backdrop-blur-md px-4 py-3 md:px-10">
    <div className="flex items-center gap-2 text-slate-900">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <TrendingUp size={20} />
      </div>
      <h2 className="text-lg font-bold leading-tight tracking-tight">AgencyScale</h2>
    </div>
    <div className="hidden items-center gap-8 md:flex">
      <nav className="flex items-center gap-6">
        <a className="text-sm font-medium hover:text-primary transition-colors" href="#what-you-learn">What You'll Learn</a>
        <a className="text-sm font-medium hover:text-primary transition-colors" href="#speaker">Speaker</a>
        <a className="text-sm font-medium hover:text-primary transition-colors" href="#testimonials">Testimonials</a>
      </nav>
      <button className="flex h-10 cursor-pointer items-center justify-center rounded-lg bg-accent px-6 text-sm font-bold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-105 hover:bg-orange-600">
        Reserve Seat
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative bg-white py-12 md:py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 md:px-10">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Live Training Event
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            How to Scale Your Agency to <span className="text-primary">$50k/mo</span> Without Burnt Out Teams
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Discover the 3-step acquisition framework to generate consistent B2B leads on autopilot. Stop relying on referrals and build a predictable pipeline.
          </p>
          <div className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-background-light p-5">
            <div className="flex items-center gap-3">
              <Calendar className="text-primary" size={20} />
              <span className="font-semibold">Thursday, October 24th</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-primary" size={20} />
              <span className="font-semibold">2:00 PM EST (Live)</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="flex h-14 w-full cursor-pointer items-center justify-center rounded-lg bg-accent px-8 text-lg font-bold text-white shadow-xl shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto">
              Reserve My Seat Now
            </button>
            <p className="text-sm font-medium text-slate-500 italic flex items-center gap-1">
              <Flame className="text-red-500" size={16} />
              Limited seats available for live Q&A
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-full w-full lg:h-auto"
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xl md:aspect-square lg:aspect-[4/5] relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNXg0V28oHZRHztA1Gsw-2KgCWz-IyeSggLMlrGDg0kTDZr_pKf2EiDoXfjst98Ha2zZQU7DKGLL1BAQZCd14QYsKzdksCFpq4eCWCItyR_H6mbGlxHpJ5InSilpaILJA4q03Ux9ldpDCBYRKNDMn1ZIbC9MnwgyhqN1p_fZXd6V690eKdtNZeGTStbVo6qNxNPgVHoLl9vjX6JwyH-eScffAPxS6PbzSmhKWj5ZM77Tco2aAjScUZvfqM0YBGPD9wn-z-pCwHxfc" 
              alt="David Chen" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium text-slate-300">Your Instructor</p>
              <p className="text-xl font-bold">David Chen</p>
              <p className="text-sm opacity-90">Founder, ScalePress Agency</p>
            </div>
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-white p-4 shadow-xl md:block">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBiUR7Y67wY-fEcAv1mKaLTwTIMzLgcePdWJOb7SSWpn7MVyKfMCBevscAP2hoHuHDxTydKIt221anAXq2I4x8X3ACdHI4fsJ9GKeC1m7zywHUswORt2qM3FZEGqLY1mtanaFlAdXZj0Lrq9FiSucJA1lhU-p9SvmJT5GbsG08prhjnDcUTEJEABa7QYdvEdhzL_aT4St3fZEMuAwMZJZl_oARCudMdTNsoWCR_oVKpoG0hvZ_tyHNAwLtUfUH5g40s-xOHr8YIUpk`}
                    alt={`Attendee ${i}`}
                    className="h-10 w-10 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">1,200+</p>
                <p className="text-xs text-slate-500">Agencies Scaled</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <div className="border-y border-slate-200 bg-white py-8">
    <div className="mx-auto max-w-7xl px-4 text-center">
      <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">Trusted by founders from</p>
      <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale transition-all hover:grayscale-0 md:gap-16">
        <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><Diamond size={24} /> TechFlow</div>
        <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><Rocket size={24} /> GrowthIo</div>
        <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><BarChart3 size={24} /> ScaleUp</div>
        <div className="flex items-center gap-2 text-xl font-bold text-slate-800"><Users size={24} /> Connect</div>
      </div>
    </div>
  </div>
);

const ProblemSection = () => {
  const problems = [
    { title: "Inconsistent Lead Flow", desc: "You rely heavily on referrals. Some months are great, others you're scrambling to pay the bills.", icon: <TrendingUp className="text-red-600" /> },
    { title: "Manual Outreach Burnout", desc: "You or your team spend hours sending cold DMs or emails with abysmal response rates.", icon: <UserX className="text-red-600" /> },
    { title: "Low Ticket Trap", desc: "Your current leads can't afford premium pricing, keeping your margins razor thin.", icon: <DollarSign className="text-red-600" /> },
    { title: "Stuck in Fulfillment", desc: "You are the bottleneck. You can't focus on growth because you're too busy doing the work.", icon: <Hourglass className="text-red-600" /> },
    { title: "Hiring Hesitation", desc: "You know you need A-players but fear you won't have enough work to keep them long-term.", icon: <Users className="text-red-600" /> },
    { title: "Invisible Authority", desc: "You're great at what you do, but nobody outside your immediate network knows it.", icon: <EyeOff className="text-red-600" /> },
  ];

  return (
    <section className="bg-background-light py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">Is This You?</h2>
          <p className="text-lg text-slate-600">If you are an agency owner facing these challenges, this masterclass is designed specifically to solve them.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                {p.icon}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  const items = [
    { title: "The 15-Minute LinkedIn Routine", desc: "How to generate 5-10 qualified appointments every week without spending a dime on ads." },
    { title: "Automated Outreach Systems", desc: "Set up \"set and forget\" campaigns that warm up leads while you sleep." },
    { title: "The \"No-Pitch\" Sales Script", desc: "Close high-ticket deals without feeling salesy, pushy, or desperate." },
    { title: "Pricing for Profit", desc: "How to restructure your offer to command 3x-5x your current prices." },
  ];

  return (
    <section className="py-20 bg-white" id="what-you-learn">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">The Curriculum</span>
              <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">What You'll Discover In 60 Minutes</h2>
              <p className="mt-4 text-slate-600">We're pulling back the curtain on the exact systems we used to scale from $10k to $50k/mo in under 6 months.</p>
            </div>
            <div className="grid gap-6">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-md rounded-2xl bg-slate-900 p-8 text-white shadow-2xl overflow-hidden">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="relative z-10 space-y-6 text-center">
                <h3 className="text-2xl font-bold">The Pipeline Protocol</h3>
                <p className="text-slate-400 text-sm">Our proprietary framework for predictable growth.</p>
                <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-4 border-slate-700 bg-slate-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full border-4 border-primary border-dashed animate-spin-slow"></div>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-black text-primary">3</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Steps</span>
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 px-2 text-xs font-bold text-primary">Attract</div>
                  <div className="absolute bottom-6 -right-2 bg-slate-900 px-2 text-xs font-bold text-primary">Nurture</div>
                  <div className="absolute bottom-6 -left-2 bg-slate-900 px-2 text-xs font-bold text-primary">Convert</div>
                </div>
                <button className="w-full rounded-lg bg-accent py-3 text-sm font-bold text-white shadow-lg shadow-accent/20 hover:bg-orange-600 transition-colors">
                  Learn The Protocol
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DarkCTA = () => (
  <section className="relative overflow-hidden bg-background-dark py-24 text-white">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    <div className="relative mx-auto max-w-4xl px-4 text-center">
      <h2 className="mb-6 text-4xl font-black md:text-5xl">The Feast or Famine Cycle Ends Here</h2>
      <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
        Stop relying on hope marketing. The manual outreach, the low-quality leads, and the stress of not knowing where your next client is coming from ends today. Join us to build a machine that works for you.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button className="h-12 w-full min-w-[200px] rounded-lg bg-primary px-6 font-bold text-white transition-colors hover:bg-blue-600 sm:w-auto">
          Reserve My Seat
        </button>
        <p className="text-sm text-slate-400">No credit card required</p>
      </div>
    </div>
  </section>
);

const Speaker = () => (
  <section className="py-20 bg-background-light" id="speaker">
    <div className="mx-auto max-w-7xl px-4 md:px-10">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFM-oTSYiZISIpTqxn5jSkOlF7fUW5j48LOaUA6ap-cCldutaxfw-uNIM762v7f4zk70J-SDrpCL2iMqmzV9N-XdZig3AlbmAJRbJhL6UdixGEFp-pOzELUiBsh8nhLe4SX_EZTtFtqmr4cU8-BnhRJcuY3kaZtg7OQnAsYZDlS6CU-tQiIUyB0iv1eIl0QflHjKy-uOLqOVqjHXVByKMWPK7NQJZBVnoT9CRrZBsPZFraExxf3aXxfmcJb2txIkrI_CB86b_KSu0" 
              alt="David Chen" 
              className="h-full w-full object-cover min-h-[300px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
            <span className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Meet Your Instructor</span>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">David Chen</h2>
            <p className="mb-6 text-slate-600">
              Founder of ScalePress Agency and creator of the Pipeline Protocol. David has helped over 1,200 agency owners break through revenue plateaus. He went from $0 to $1M ARR in 18 months using the exact strategies revealed in this training.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div>
                <p className="text-2xl font-black text-slate-900">$15M+</p>
                <p className="text-xs text-slate-500">Client Revenue Generated</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">1,200+</p>
                <p className="text-xs text-slate-500">Students Mentored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Bonus = () => (
  <section className="py-12">
    <div className="mx-auto max-w-3xl px-4">
      <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-white p-8 text-center">
        <div className="absolute -right-10 -top-10 h-32 w-32 rotate-12 bg-yellow-400 opacity-20 blur-3xl"></div>
        <Gift className="mx-auto mb-4 text-primary" size={40} />
        <h3 className="mb-2 text-2xl font-bold text-slate-900">Exclusive Live Attendee Bonus</h3>
        <p className="mb-6 text-slate-600">
          Stay until the end of the webinar and receive our <strong>"Plug & Play Lead Magnet Template Pack"</strong> (Value $497) completely FREE.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          <Lock size={14} />
          Only for live attendees
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: "Sarah Jenkins", role: "CEO, Digital Lift", text: "\"Before this training, I was stuck at $8k/mo for a year. I implemented the LinkedIn routine and closed 3 deals in my first week. We just hit $25k!\"", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTfRGUB92FJ4VNL5dkgqq61RI3F6RAB4JtQ2QRda4zi0Tqg-ifPRLTly-BmVGDZUVYmLQ5_B3u5KWncnT_VF30A0ofDFSQtz_zqCnbE7y0or2jp-gml95YkJIf288jzVtvGfmClEPhg-8RSJ08QWUjeiuEmkyK_PE7UOHes1OqIwBZgTqt2w-x8OUAdBJf-30lTty93DFDZc1IqMgXvrAXQTVX4umQySmhyu6Tm0k_NmT3X1by5Nnu6Rb_40XeNXxiCQBhGwcepJI" },
    { name: "Mark Roberts", role: "Founder, RankUp SEO", text: "\"The sales script alone is worth thousands. I stopped pitching and started diagnosing. My close rate went from 15% to 45% overnight.\"", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA72lD36iY_ZCkU0HYMHahCEPi2aHrpBobcrPn0Fx8vSLGIdklPwCjw9HTT5NVhp2fQeekAQiZHAPzQHaerl00bqkIbbUihhyaK8obrKfuv-M9NN2WEZi3HohH4Jq4Dx9xLlr0qFQ62---sO9TWZI3uWeeTWOPux1xca6vpTd7ghHBMIhel4kv0j_35HJH0CSn7CMXGD9PVZCtdllbJ0zGm3mnVsYckE9-FiWaehfKu9imvUifNH0kytz8ASHXrtWHWuNCkel3_09o" },
    { name: "Elena Garcia", role: "Director, Creative Flow", text: "\"Finally a system that doesn't require me to dance on TikTok. Pure B2B strategy. The pipeline protocol gave us clarity on our numbers.\"", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMGJoWL1XoRbTf_SXyVlg0vQSeHpckYVBrhudfiShvT-Gz4AaPMERnxXnDw0QnZnk1R3IHI4AyAPV-Dq5vLedQ_Dn0k4zYaEI7_B-G1TH8zi8yD0AUTJaSwlTgWDKVo2CnOcFliOGBPPOZfW-fXKpL5qTbp5T_ebAoxo2CSTsZHLvSRhAxgyyQsjbPdrz0vcjjT8w8MJk58pQUF0YFQ5vzkn4KkJEL1UhJ_boNte5kNBgQa2AozslNRjhIHjU5P4JLKcK5Q4SlopM" },
  ];

  return (
    <section className="bg-background-light py-20" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-slate-900">Don't Just Take Our Word For It</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm">
              <div>
                <div className="mb-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="mb-6 text-slate-700">{r.text}</p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <img src={r.img} alt={r.name} className="h-10 w-10 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-lg border border-slate-200 bg-background-light overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between p-4 font-bold text-slate-900 text-left"
      >
        <span>{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 pt-0 text-slate-600 border-t border-slate-200/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section className="py-20 bg-white">
    <div className="mx-auto max-w-4xl px-4">
      <h2 className="mb-10 text-center text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <FAQItem 
          question="Is there a replay available?" 
          answer="We highly recommend attending live to get your questions answered and claim the live-only bonus. A replay may be sent out for 24 hours, but it is not guaranteed." 
        />
        <FAQItem 
          question="How much does the training cost?" 
          answer="This masterclass is 100% free. There is no cost to attend. We do this to build goodwill in the agency community." 
        />
        <FAQItem 
          question="Is this for beginners?" 
          answer="While beginners will get value, this training is optimized for agency owners already doing at least $5k-$10k/mo who are looking to scale to $50k+." 
        />
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="border-t border-slate-200 bg-background-light py-20">
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center">
      <div className="space-y-4">
        <h2 className="text-4xl font-black text-slate-900">Stop Guessing Your Growth</h2>
        <p className="text-lg text-slate-600">Join the other 1,200+ agency owners who have used this system to build freedom.</p>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-lg bg-red-100 px-4 py-2 text-red-700">
        <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
          <AlertTriangle size={16} />
          Warning
        </span>
        <p className="text-sm font-medium">Only <span className="underline">500 seats</span> available on the webinar platform.</p>
      </div>
      <button className="flex h-16 w-full max-w-md cursor-pointer items-center justify-center rounded-lg bg-accent px-8 text-xl font-bold text-white shadow-xl shadow-accent/25 transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-orange-600">
        Secure My Free Spot
      </button>
      <p className="text-xs text-slate-500">Live Training: Thursday, October 24th @ 2:00 PM EST</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white py-10 border-t border-slate-100">
    <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500">
      <p>© 2023 Scale Your Agency. All rights reserved.</p>
      <div className="mt-4 flex justify-center gap-6">
        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
        <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <Curriculum />
        <DarkCTA />
        <Speaker />
        <Bonus />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
