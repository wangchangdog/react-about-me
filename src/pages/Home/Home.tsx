import { Button } from '../../components/ui/Button/Button'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>
              Hello, I'm <span className={styles['hero__title--highlight']}>Your Name</span>
            </h1>
            <p className={styles.hero__subtitle}>
              フロントエンド開発者として、美しく機能的なWebサイトを制作しています。
            </p>
            <div className={styles.hero__actions}>
              <Button variant="gaming" size="lg" href="/portfolio">
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
      <section className={styles.introduction}>
        <div className="container">
          <div className={styles.introduction__content}>
            <h2 className="section-title">About Me</h2>
            <p className={styles.introduction__text}>
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
      <section className={styles['featured-works']}>
        <div className="container">
          <h2 className="section-title">Featured Works</h2>
          <div className={styles['works-grid']}>
            <div className={styles['work-card']}>
              <div className={styles['work-card__image']}>
                <div className={styles['work-card__placeholder']}>Project Image</div>
              </div>
              <div className={styles['work-card__content']}>
                <h3 className={styles['work-card__title']}>プロジェクト 1</h3>
                <p className={styles['work-card__description']}>
                  React + TypeScriptで構築したWebアプリケーション
                </p>
                <div className={styles['work-card__tags']}>
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">CSS3</span>
                </div>
              </div>
            </div>

            <div className={styles['work-card']}>
              <div className={styles['work-card__image']}>
                <div className={styles['work-card__placeholder']}>Project Image</div>
              </div>
              <div className={styles['work-card__content']}>
                <h3 className={styles['work-card__title']}>プロジェクト 2</h3>
                <p className={styles['work-card__description']}>
                  レスポンシブデザインを活用したポートフォリオサイト
                </p>
                <div className={styles['work-card__tags']}>
                  <span className="tag">HTML5</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>

            <div className={styles['work-card']}>
              <div className={styles['work-card__image']}>
                <div className={styles['work-card__placeholder']}>Project Image</div>
              </div>
              <div className={styles['work-card__content']}>
                <h3 className={styles['work-card__title']}>プロジェクト 3</h3>
                <p className={styles['work-card__description']}>
                  Vite + Reactを使用した高速なWebアプリケーション
                </p>
                <div className={styles['work-card__tags']}>
                  <span className="tag">Vite</span>
                  <span className="tag">React</span>
                  <span className="tag">CSS Modules</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['featured-works__action']}>
            <Button variant="primary" href="/portfolio">
              すべてのプロジェクトを見る
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}