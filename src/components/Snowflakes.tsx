import { useMemo } from "react"

const SNOWFLAKES = ["❄", "❅", "❆"]

interface Flake {
  id: number
  left: string
  size: string
  duration: string
  delay: string
  symbol: string
  opacity: number
}

export function Snowflakes() {
  const flakes = useMemo<Flake[]>(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 16 + 10}px`,
      duration: `${Math.random() * 10 + 8}s`,
      delay: `${Math.random() * 12}s`,
      symbol: SNOWFLAKES[i % SNOWFLAKES.length],
      opacity: Math.random() * 0.4 + 0.2,
    }))
  }, [])

  return (
    <>
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            fontSize: flake.size,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
            opacity: flake.opacity,
          }}
        >
          {flake.symbol}
        </span>
      ))}
    </>
  )
}
