
function App() {

  return (
    <>
      <div
        className="relative w-full min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat px-4 py-10"
        style={{backgroundImage: `url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg')`,}}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#04070c]/92 via-[#070b12]/90 to-[#04070c]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.10),transparent_60%)]" />
        
        <div className="relative w-full max-w-md mx-auto">

          {/* heading */}
          <div className="text-center mb-6">
            <span className="font-mono-sg text-[11px] tracking-[0.3em] uppercase text-[#2dd4bf]/80">
              Local & Instant
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#eef3f7] mt-2">
              SecureGen
            </h1>
            <p className="text-sm text-[#b9c4d1]/70 mt-1">Password generator</p>
            <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent" />
          </div>
   

          <p className="text-center text-[11px] text-[#b9c4d1]/50 mt-5 font-mono-sg tracking-wide">
            Generated locally in your browser - nothing is sent anywhere
          </p>
        </div>

      </div>      
    </>
  )
}

export default App
