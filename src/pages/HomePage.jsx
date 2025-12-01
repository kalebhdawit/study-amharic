import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="/media/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="hero-content">
            <h1>Study Amharic</h1>
            <p>Interactive lessons and educational resources designed
            to bridge the gap between the beautiful language and its students.</p>
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
    </div>
  )
}
