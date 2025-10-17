import TeamMember from '@/components/TeamMember';

const teamMembers = [

  {
    name: 'Michael Chen',
    position: 'Chief Operation Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    socialLinks: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Emily Rodriguez',
    position: 'Chief Marketing Officer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    socialLinks: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'David Park',
    position: 'Chief Design Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    socialLinks: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'Lisa Thompson',
    position: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    socialLinks: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    name: 'James Wilson',
    position: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    socialLinks: {
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-20 overflow-hidden bg-white">
      {/* FxCapital-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fcfe] to-[#E8F4FD]"></div>
      
      {/* Subtle overlay patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#06ABE0]/5 via-transparent to-[#07BFFA]/5 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#06ABE0]/3 to-transparent animate-float-slow"></div>
      </div>
      
      {/* Clean geometric elements inspired by FxCapital */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-8 w-24 h-24 bg-gradient-to-br from-[#06ABE0]/20 to-[#07BFFA]/15 rounded-2xl rotate-45 animate-float-slow blur-lg shadow-lg shadow-[#06ABE0]/10"></div>
        <div className="absolute bottom-24 left-8 w-20 h-20 bg-gradient-to-br from-[#0496c6]/25 to-[#06ABE0]/20 rounded-full animate-bounce-slow delay-500 blur-md shadow-lg shadow-[#0496c6]/15"></div>
        <div className="absolute top-1/2 right-1/5 w-16 h-16 bg-gradient-to-br from-[#07BFFA]/30 to-[#06ABE0]/25 rounded-xl rotate-12 animate-float delay-1000 blur-sm shadow-md shadow-[#07BFFA]/20"></div>
        <div className="absolute bottom-16 right-16 w-28 h-28 bg-gradient-to-br from-[#06ABE0]/15 to-cyan-300/20 rounded-full animate-bounce-slow delay-300 blur-lg shadow-xl shadow-[#06ABE0]/10"></div>
        
        {/* Sparkle elements */}
        <div className="absolute top-20 left-1/4 w-6 h-6 bg-gradient-to-br from-white/70 to-[#06ABE0]/40 rounded-full animate-pulse delay-400 blur-sm shadow-md shadow-white/30"></div>
        <div className="absolute bottom-40 right-1/4 w-8 h-8 bg-gradient-to-br from-white/60 to-[#07BFFA]/35 rounded-full animate-pulse delay-900 blur-sm shadow-md shadow-white/25"></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-[#06ABE0]">Amazing Team</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in technology, 
            design, and innovation to deliver exceptional results that drive business success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="opacity-0 animate-fade-in-up w-full"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <TeamMember {...member} />
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#07BFFA] to-[#0496c6] rounded-3xl p-12 text-white shadow-xl shadow-[#06ABE0]/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <button className="bg-white text-[#06ABE0] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 border-2 border-white/20 shadow-xl hover:shadow-2xl">
              View Open Positions
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
