import Threads from "../../components/Threads/Threads";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";

const Features = () => {
  return (
    <section className="relative z-10 pt-40 pb-70 md:pb-10 " >
    <div className="bg-[#0D0D0D] text-white w-full min-h-screen overflow-visible relative mb-400 md:mb-0" id="features">
      {/* Background threads animation */}
      <div className="absolute inset-0 w-full h-full max-w-full overflow-hidden">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color={[0.2, 0.6, 1]}
        />
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center h-full text-center px-4 pointer-events-none">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pointer-events-auto">
          Our Features
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-2 md:mt-4 lg:mt-6 max-w-3xl mx-auto pointer-events-auto">
          "Simplify your inbox, automate decisions, and reclaim your
          productivity with our intelligent email assistant."
        </p>

        {/* Grid of Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 pointer-events-auto w-full md:max-w-5xl xs:max-w-xl px-4">
          {/* Inbox */}
          <SpotlightCard
            spotlightColor="rgba(0, 229, 255, 0.2)"
            className="custom-spotlight-card bg-[#0f172a]/60 min-h-[350px] rounded-sm p-6 shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="flex flex-col items-center justify-center text-white text-center space-y-4">
              <div className="bg-[#1e293b] p-4 rounded-full shadow-md">
                <svg
                  className="w-8 h-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                Inbox
              </h3>
              <p className="text-base md:text-lg  text-cyan-400">
                Stay on top of every message.
              </p>
              <p className="text-sm text-gray-300 max-w-md">
                Manage all emails in a clean, distraction-free space using smart
                filters.
              </p>
            </div>
          </SpotlightCard>

          {/* Urgent Emails */}
          <SpotlightCard
            spotlightColor="rgba(255, 69, 58, 0.15)"
            className="custom-spotlight-card bg-[#1a1a1a]/60 min-h-[350px]  rounded-sm p-6 shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="flex flex-col items-center justify-center text-white text-center space-y-4">
              <div className="bg-[#2c2c2c] p-4 rounded-full shadow-md">
                <svg
                  className="w-8 h-8 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M12 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                Urgent Emails
              </h3>
              <p className="text-base md:text-lg  text-red-400">Never miss what matters.</p>
              <p className="text-sm text-gray-300 max-w-md">
                Instantly see priority emails flagged as urgent by our smart AI
                filters.
              </p>
            </div>
          </SpotlightCard>

          {/* Follow-ups */}
          <SpotlightCard
            spotlightColor="rgba(255, 214, 10, 0.15)"
            className="custom-spotlight-card bg-[#1a1a1a]/60 min-h-[350px]  rounded-sm p-6 shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="flex flex-col items-center justify-center text-white text-center space-y-4">
              <div className="bg-[#2c2c2c] p-4 rounded-full shadow-md">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                Follow-ups
              </h3>
              <p className="text-base md:text-lg  text-yellow-400">Stay accountable.</p>
              <p className="text-sm text-gray-300 max-w-md">
                Track emails that need a reply or further action — AI will
                remind you.
              </p>
            </div>
          </SpotlightCard>

          {/* Meetings */}
          <SpotlightCard
            spotlightColor="rgba(34, 197, 94, 0.15)"
            className="custom-spotlight-card bg-[#1a1a1a]/60 min-h-[350px]  rounded-sm p-6 shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="flex flex-col items-center justify-center text-white text-center space-y-4">
              <div className="bg-[#2c2c2c] p-4 rounded-full shadow-md">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 9h10m2 7H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide">Meetings</h3>
              <p className="text-base md:text-lg  text-green-400">Never miss a call.</p>
              <p className="text-sm text-gray-300 max-w-md">
                See upcoming meetings and join links extracted directly from
                your inbox.
              </p>
            </div>
          </SpotlightCard>

          {/* Approvals */}
          <SpotlightCard
            spotlightColor="rgba(139, 92, 246, 0.15)"
            className="custom-spotlight-card bg-[#1a1a1a]/60 min-h-[350px]  rounded-sm p-6 shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="flex flex-col items-center justify-center text-white text-center space-y-4">
              <div className="bg-[#2c2c2c] p-4 rounded-full shadow-md">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide">Approvals</h3>
              <p className="text-base md:text-lg  text-purple-400">One-click decisions.</p>
              <p className="text-sm text-gray-300 max-w-md">
                Quickly approve or reject requests straight from your email
                assistant.
              </p>
            </div>
          </SpotlightCard>

          {/* Automation Rules */}
          <SpotlightCard
            spotlightColor="rgba(0, 229, 255, 0.15)"
            className="custom-spotlight-card bg-[#1a1a1a]/60 min-h-[350px]  rounded-sm p-6 shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="flex flex-col items-center justify-center text-white text-center space-y-4">
              <div className="bg-[#2c2c2c] p-4 rounded-full shadow-md">
                <svg
                  className="w-8 h-8 text-cyan-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.105 0-2 .672-2 1.5S10.895 11 12 11s2 .672 2 1.5S13.105 14 12 14m0 0v.5m0-6v.5M12 3v1m0 16v1m9-9h-1M4 12H3m16.364-6.364l-.707.707M5.343 18.657l-.707.707m12.728 0l-.707-.707M5.343 5.343l-.707-.707"
                  />
                </svg>
              </div>
              <h3 className="text-xl  md:text-2xlfont-semibold tracking-wide">
                Automation Rules
              </h3>
              <p className="text-base md:text-lg  text-cyan-300">Your inbox, your rules.</p>
              <p className="text-sm text-gray-300 max-w-md">
                Set up smart rules to auto-sort, respond, or archive based on
                email type.
              </p>
            </div>
          </SpotlightCard>

          {/* Settings */}
          <SpotlightCard
            spotlightColor="rgba(255, 255, 255, 0.1)"
            className="custom-spotlight-card bg-[#1a1a1a]/60 min-h-[350px]  rounded-sm p-6 shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="flex flex-col items-center justify-center text-white text-center space-y-4">
              <div className="bg-[#2c2c2c] p-4 rounded-full shadow-md">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.724 1.724 0 002.603.993 1.724 1.724 0 012.45 2.45 1.724 1.724 0 00.993 2.603c.921.3.921 1.603 0 1.902a1.724 1.724 0 00-.993 2.603 1.724 1.724 0 01-2.45 2.45 1.724 1.724 0 00-2.603.993c-.3.921-1.603.921-1.902 0a1.724 1.724 0 00-2.603-.993 1.724 1.724 0 01-2.45-2.45 1.724 1.724 0 00-.993-2.603c-.921-.3-.921-1.603 0-1.902a1.724 1.724 0 00.993-2.603 1.724 1.724 0 012.45-2.45 1.724 1.724 0 002.603-.993z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold tracking-wide text-xl md:text-2xl">Settings</h3>
              <p className="text-base md:text-lg  text-gray-400">Customize your assistant.</p>
              <p className="text-sm text-gray-300 max-w-md">
                Adjust preferences, AI tone, and workflows to suit your
                productivity style.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Features;


