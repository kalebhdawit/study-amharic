import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        {/* Background video or image */}
        <div className="hero-media">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text overlay */}
        <div className="hero-content">
          <p className="eyebrow">The Beautiful Language</p>
          <h1>Study Amharic</h1>
          <p className="hero-subtitle">
            Interactive lessons, grammar and vocabulary resources, and practice exercises designed
            to bridge the gap between the language and its learners.
          </p>
          <div className="hero-actions">
            <Link to="/lessons" className="primary-btn">
              Start learning
            </Link>
            <Link to="/about" className="ghost-btn">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* SCROLL SECTIONS */}
      <section className="section">
        <div className="section-content">
          <h2>Short, focused lessons</h2>
          <p>
            Progress through bite-sized lessons that build your intuition,
            not just your memorization. Each lesson focuses on a single,
            clear concept.
          </p>
        </div>
      </section>

      <section className="section section--grid">
        <div className="section-card">
          <h3>Vocabulary</h3>
          <p>
            Curated word lists grouped by theme: family, travel, food, and more.
          </p>
        </div>
        <div className="section-card">
          <h3>Practice</h3>
          <p>
            Exercises that test both recognition and recall so the language sticks.
          </p>
        </div>
        <div className="section-card">
          <h3>Real-world phrases</h3>
          <p>
            Learn expressions you will actually use with family and friends.
          </p>
        </div>
      </section>
    </div>
  )
}
