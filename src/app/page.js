import Link from "next/link";
import VideoSettings from "@/components/VideoSettings";
import Tips from "@/components/Tips";

export default function Home() {
  return (
    <>
      <nav style={{ padding: "1rem", background: "#111", textAlign: "center" }}>
        <Link href="/" style={{ margin: "0 1rem", color: "#00ffe1" }}>Home</Link>
        <Link href="/about" style={{ margin: "0 1rem", color: "#00ffe1" }}>About</Link>
        <Link href="/contact" style={{ margin: "0 1rem", color: "#00ffe1" }}>Contact</Link>
      </nav>

      <header>
        <h1>FlowMotion</h1>
        <p>Turn any video into smooth slow-motion magic. Interpolate. Enhance. Impress.</p>
      </header>

      <div className="container">
        <h2>What is FlowMotion?</h2>
        <pre>
          FlowMotion uses advanced AI models to transform ordinary footage into beautifully
          smooth, high-frame-rate videos.
          <br />
          Perfect for edits, cinematic transitions, or epic slow-motion shots.
        </pre>

        <div className="features">
          <div className="feature">
            <h3>AI-Powered Interpolation</h3>
            <p>Enhance videos with realistic motion using state-of-the-art RIFE deep learning models.</p>
          </div>
          <div className="feature">
            <h3>Up to 60 FPS</h3>
            <p>Choose from multiple target frame rates: 30, 48, or 60 FPS for your ideal flow.</p>
          </div>
          <div className="feature">
            <h3>Built for Creators</h3>
            <p>Especially optimized for stylized content like anime, game trailers, or animated sequences.</p>
          </div>
        </div>

        <div className="comparison">
          <h2>See the Difference</h2>
          <p>
            Experience smooth motion with FlowMotion. Left: Original (24 FPS), Right: Interpolated (48 FPS).
          </p>
          <div className="video-wrapper">
            <a href="https://en.wikipedia.org/wiki/Dragon_Ball_Super:_Broly">
              <video src="/media/low_fps.mp4" autoPlay loop muted />
            </a>
            <a href="https://en.wikipedia.org/wiki/Dragon_Ball_Super:_Broly">
              <video src="/media/synced_right.mp4" autoPlay loop muted />
            </a>
          </div>
        </div>
        <VideoSettings />
        <Tips />

        <div className="cta">
          <button>Try FlowMotion</button>
        </div>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} FlowMotion. All rights reserved.</p>
      </footer>
    </>
  );
}
