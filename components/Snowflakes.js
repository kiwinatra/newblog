import { useEffect, useState } from 'react'

const Snowflakes = () => {
  const [snowflakes, setSnowflakes] = useState([])

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes = []
      const snowflakeSymbols = ['❄', '❅', '❆', '✼', '✻']
      for (let i = 0; i < 30; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 15,
          size: Math.random() * 12 + 8,
          duration: Math.random() * 15 + 20,
          sway: Math.random() * 20 - 10,
          symbol: snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)],
          opacity: Math.random() * 0.5 + 0.3,
          blur: Math.random() * 2,
        })
      }
      setSnowflakes(flakes)
    }

    generateSnowflakes()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white animate-fall-sway"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.animationDelay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            filter: `blur(${flake.blur}px)`,
            willChange: 'transform',
          }}
        >
          {flake.symbol}
        </div>
      ))}
    </div>
  )
}

export default Snowflakes
