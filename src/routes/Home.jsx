export default function Home() {
  return (
  <section className="hero d-flex align-items-center" style={{backgroundImage: "url('/assets/hero.jpg')"}}>
  <div className="container text-center text-light">
  <h1 className="display-4 fw-bold animate">Welcome 2026 🎉</h1>
  <p className="lead">A fresh start. New goals. New memories.</p>
  <p className="mt-3">
  Celebrate the New Year with music, lights, joy, and unforgettable moments.
  Join thousands of people welcoming 2026 with positivity and energy.
  </p>
  <div className="d-flex justify-content-center gap-3 mt-4">
  <a href="/countdown" className="btn btn-warning btn-lg">⏳ Countdown</a>
  <a href="/events" className="btn btn-outline-light btn-lg">🎊 Explore Events</a>
  </div>
  </div>
  </section>
  );
  }