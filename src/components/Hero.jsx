import {
  ArrowRightIcon,
  ShieldCheckIcon,
  VideoIcon,
  UsersIcon,
  MicIcon,
  MonitorUpIcon,
  MessageSquareIcon,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-blue-50 via-slate-50 to-white"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 py-12 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 pr-5 py-2 rounded-full bg-blue-100/70 text-blue-700 text-xs font-medium border border-blue-200/60">
                <ShieldCheckIcon size={16} />
                Simple. Secure. Seamless Meetings.
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-800 leading-tight font-medium tracking-tight">
                Meet better. <br />
                <span className="text-blue-600">Connect faster.</span>
                <br />
                Work together.
              </h1>

              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Connect, collaborate, and communicate from anywhere with
                seamless video meetings, screen sharing, and real-time chat.
                Bring your team closer with Orbito.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3.5 rounded-full shadow-md shadow-blue-600/20 flex items-center justify-center gap-2.5 transition-all"
                >
                  Get Started
                  <ArrowRightIcon size={18} />
                </a>

                <a
                  href="#features"
                  className="bg-white/80 hover:bg-blue-50 border border-slate-200 text-slate-800 font-medium px-7 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all"
                >
                  Explore Features
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon size={17} className="text-blue-600" />
                Secure Meetings
              </div>

              <div className="flex items-center gap-2">
                <UsersIcon size={17} className="text-blue-600" />
                Easy Collaboration
              </div>
            </div>
          </div>

          {/* Right Column - Meeting Preview Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full bg-white/60 backdrop-blur-xl rounded-4xl p-6 sm:p-8 border border-slate-200/80 shadow-xl shadow-blue-100/40 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Welcome to</p>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Orbito Meetings
                  </h2>
                </div>

                <span className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Live Preview
                </span>
              </div>

              {/* Meeting Participants */}
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-4/3 bg-linear-to-br from-blue-100 to-blue-200 rounded-2xl flex flex-col items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-semibold">
                    AM
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-800">
                    Alex Morgan
                  </p>
                </div>

                <div className="aspect-4/3 bg-linear-to-br from-purple-100 to-purple-200 rounded-2xl flex flex-col items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-semibold">
                    SW
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-800">
                    Sarah Wilson
                  </p>
                </div>

                <div className="aspect-4/3 bg-linear-to-br from-orange-100 to-orange-200 rounded-2xl flex flex-col items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-semibold">
                    JC
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-800">
                    John Carter
                  </p>
                </div>

                <div className="aspect-4/3 bg-linear-to-br from-pink-100 to-pink-200 rounded-2xl flex flex-col items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-pink-500 text-white flex items-center justify-center text-lg font-semibold">
                    ED
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-800">
                    Emily Davis
                  </p>
                </div>
              </div>

              {/* Meeting Controls */}
              <div className="flex items-center justify-center gap-3 border-t border-slate-200 pt-5">
                <span className="p-3 rounded-full bg-blue-50 text-blue-600">
                  <MicIcon size={19} />
                </span>

                <span className="p-3 rounded-full bg-blue-50 text-blue-600">
                  <VideoIcon size={19} />
                </span>

                <span className="p-3 rounded-full bg-blue-50 text-blue-600">
                  <MonitorUpIcon size={19} />
                </span>

                <span className="p-3 rounded-full bg-blue-50 text-blue-600">
                  <MessageSquareIcon size={19} />
                </span>

                <span className="p-3 rounded-full bg-red-500 text-white">
                  <VideoIcon size={19} />
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>4 participants connected</span>
                <span className="font-medium text-blue-600">
                  Made with Orbito
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
