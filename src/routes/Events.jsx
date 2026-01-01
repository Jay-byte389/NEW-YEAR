export default function Events() {
  const events = [
    {
      title: "🎶 DJ Night",
      desc: "Top DJs, live beats, and nonstop music till midnight."
    },
    {
      title: "🎇 Fireworks Show",
      desc: "A breathtaking fireworks display welcoming 2026."
    },
    {
      title: "🍽️ Gala Dinner",
      desc: "Luxury dining with exclusive New Year menus."
    },
    {
      title: "💃 Dance Party",
      desc: "Dance floor open with live performers and dancers."
    }
  ];

  return (
    <div className="container page">
      <h2 className="title">New Year Events</h2>

      <p className="text-center mb-5">
        Celebrate the arrival of 2026 with exciting events designed to create
        unforgettable memories with friends and family.
      </p>

      <div className="row">
        {events.map((event, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card glass h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text small mt-2">
                  {event.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
