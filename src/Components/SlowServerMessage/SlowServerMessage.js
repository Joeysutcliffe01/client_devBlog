export const SlowServerMessage = ({ setShowBanner }) => {

  return (
    <section className="slow_server_message_section">
      <h3 className="slow_server_message_section-message">
        The server spins down after 15 mins of inactivity 😅, loading may be
        slow at first.
      </h3>
      <h3
        className="slow_server_message_section-close-btn"
        onClick={() => setShowBanner(false)}
      >
        X
      </h3>
    </section>
  );
};
