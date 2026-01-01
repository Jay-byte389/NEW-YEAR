import { useEffect, useState } from "react";
import "../styles/Countdown.css"; // Make sure to create this CSS file

export default function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date("Jan 1, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-page">
      <div className="countdown-wrapper text-center">
        <h2 className="title mb-3">⏳ Countdown to New Year</h2>
        <p className="description mb-5">
          The countdown is on! Watch every second as we move closer to a brand
          new year filled with hope, success, and new opportunities.
        </p>

        <div className="countdown-boxes">
          {Object.entries(time).map(([k, v]) => (
            <div key={k} className="time-box">
              <h3>{v}</h3>
              <span>{k}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
