import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)    // used for Take the input reference by the input

  // This Function create random Password, And we used 'useCallback'
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "`~!@#$%^&*_-+={}[]";
    }
    // Generat random character 
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  // This Function used for to copy the Password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();    // This is used for to see the selected Password, Mean User see the selected Password
    passwordRef.current?.setSelectionRange(0, 100);    // This is used to give the range of selected Password
    window.navigator.clipboard.writeText(password)    // This is used for to selected the Password
  }, [password])

  // This Function used for, WHen The page is relod and if any thing chenge in this Dependencies array [length, numberAllowed, charAllowed, passwordGenerator] then this function run again
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

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
            <p className="text-sm text-[#b9c4d1]/70 mt-1">Password Generator</p>
            <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#2dd4bf] to-transparent" />
          </div>

          <div className='w-full rounded-2xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.05] border border-white/[0.10] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]'>

            <div className='flex rounded-xl overflow-hidden mb-6 border border-white/10 bg-[#0d1620] focus-within:border-[#2dd4bf]/50 transition-colors duration-300'>
              <input
                type="text"
                value={password}
                className="sg-focus outline-none w-full py-3 px-4 bg-transparent font-mono-sg text-base sm:text-lg tracking-wide text-[#eef3f7] placeholder:text-[#b9c4d1]/40"
                placeholder='password'
                readOnly
                ref={passwordRef}   // Give the input reference 
              />
              <button
                onClick={copyPasswordToClipboard}
                className='sg-focus outline-none flex items-center gap-1.5 bg-gradient-to-r from-[#123a3a] to-[#0d1620] text-[#7ce8dc] px-4 shrink-0 cursor-pointer border-l border-white/10 transition-colors duration-300 hover:text-[#2dd4bf]'
              >
                <i class="fa-regular fa-copy"></i>
                <span className="text-xs font-medium tracking-wide uppercase">Copy</span>
              </button>
            </div>

            <div className='flex flex-col gap-4 text-sm'>
              <div className='flex items-center gap-x-3'>
                <input
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className='sg-range w-full cursor-pointer'
                  onChange={(e) => { setLength(e.target.value) }}
                />
                <label className="font-mono-sg text-[#b9c4d1] whitespace-nowrap text-xs sm:text-sm shrink-0">Length: {length}</label>
              </div>

              <div className='flex items-center gap-x-6'>
                <div className='flex items-center gap-x-2'>
                  <input
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    className="sg-checkbox w-4 h-4 cursor-pointer"
                    onChange={() => {
                      setNumberAllowed((prev) => !prev);
                    }}
                  />
                  <label htmlFor="numberInput" className="text-[#b9c4d1] cursor-pointer select-none">Numbers</label>
                </div>

                <div className='flex items-center gap-x-2'>
                  <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="characterInput"
                    className="sg-checkbox w-4 h-4 cursor-pointer"
                    onChange={() => {
                      setCharAllowed((prev) => !prev);
                    }}
                  />
                  <label htmlFor="characterInput" className="text-[#b9c4d1] cursor-pointer select-none">Characters</label>
                </div>
              </div>
            </div>

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
