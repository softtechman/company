import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  socialLinks?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export default function TeamMember({ name, position, image, socialLinks }: TeamMemberProps) {
  return (
    <div className="group relative">
      {/* Decorative line */}
      <div className="absolute -top-4 left-8 w-16 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-20 transform rotate-12 group-hover:rotate-6 transition-transform duration-300"></div>
      
      <div className="bg-white rounded-2xl shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay with social links */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              {socialLinks && (
                <div className="flex space-x-3 justify-center">
                  {socialLinks.twitter && (
                    <a
                      href={socialLinks.twitter}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {socialLinks.facebook && (
                    <a
                      href={socialLinks.facebook}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {socialLinks.instagram && (
                    <a
                      href={socialLinks.instagram}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-pink-500 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-black mb-2">{name}</h3>
          <p className="text-gray-800 font-semibold">{position}</p>
        </div>
      </div>
    </div>
  );
}
