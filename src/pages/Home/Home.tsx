import { Button } from '../../components/ui/Button/Button'
import './Home.css'

export const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              Hello, I'm <span className="hero__title--highlight">Your Name</span>
            </h1>
            <p className="hero__subtitle">
              フロントエンド開発者として、美しく機能的なWebサイトを制作しています。
            </p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" href="/portfolio">
                ポートフォリオを見る
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="container">
          <div className="introduction__content">
            <h2 className="section-title">About Me</h2>
            <p className="introduction__text">
              React、TypeScript、CSS3を使用してモダンなWebアプリケーションを開発しています。
              ユーザーエクスペリエンスを重視し、アクセシブルで保守性の高いコードの記述を心がけています。
            </p>
            <Button variant="secondary" href="/about">
              詳しく見る
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="featured-works">
        <div className="container">
          <h2 className="section-title">Featured Works</h2>
          <div className="works-grid">
            <div className="work-card">
              <div className="work-card__image">
                <div className="work-card__placeholder">Project Image</div>
              </div>
              <div className="work-card__content">
                <h3 className="work-card__title">プロジェクト 1</h3>
                <p className="work-card__description">
                  React + TypeScriptで構築したWebアプリケーション
                </p>
                <div className="work-card__tags">
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">CSS3</span>
                </div>
              </div>
            </div>

            <div className="work-card">
              <div className="work-card__image">
                <div className="work-card__placeholder">Project Image</div>
              </div>
              <div className="work-card__content">
                <h3 className="work-card__title">プロジェクト 2</h3>
                <p className="work-card__description">
                  レスポンシブデザインを活用したポートフォリオサイト
                </p>
                <div className="work-card__tags">
                  <span className="tag">HTML5</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="work-card">
              <div className="work-card__image">
                <div className="work-card__placeholder">Project Image</div>
              </div>
              <div className="work-card__content">
                <h3 className="work-card__title">プロジェクト 3</h3>
                <p className="work-card__description">
                  Vite + Reactを使用した高速なWebアプリケーション
                </p>
                <div className="work-card__tags">
                  <span className="tag">Vite</span>
                  <span className="tag">React</span>
                  <span className="tag">CSS Modules</span>
                </div>
              </div>
            </div>
          </div>
          <div className="featured-works__action">
            <Button variant="primary" href="/portfolio">
              すべてのプロジェクトを見る
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}