import styles from './About.module.css'

export const About = () => {
  return (
    <div className={styles.about}>
      {/* Profile Section */}
      <section className={styles.profile}>
        <div className="container">
          <div className={styles['profile__content']}>
            <div className={styles['profile__image']}>
              <div className={styles['profile__image-placeholder']}>Profile Image</div>
            </div>
            <div className={styles['profile__info']}>
              <h1 className={styles['profile__title']}>About Me</h1>
              <h2 className={styles['profile__subtitle']}>フロントエンド開発者</h2>
              <p className={styles['profile__description']}>
                こんにちは！私はWebアプリケーション開発に情熱を注ぐフロントエンド開発者です。
                React、TypeScript、CSS3を使用してユーザーフレンドリーなインターフェースを
                作成することを専門としています。常に新しい技術を学び、
                より良いユーザーエクスペリエンスを提供することを目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <div className="container">
          <h2 className="section-title">スキル</h2>
          <div className={styles['skills__grid']}>
            <div className={styles['skill-category']}>
              <h3 className={styles['skill-category__title']}>フロントエンド</h3>
              <div className={styles['skill-category__items']}>
                <div className={styles['skill-item']}>
                  <span className={styles['skill-item__name']}>React</span>
                  <div className={styles['skill-item__bar']}>
                    <div className={styles['skill-item__progress']} style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className={styles['skill-item']}>
                  <span className={styles['skill-item__name']}>TypeScript</span>
                  <div className={styles['skill-item__bar']}>
                    <div className={styles['skill-item__progress']} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className={styles['skill-item']}>
                  <span className={styles['skill-item__name']}>CSS3/SCSS</span>
                  <div className={styles['skill-item__bar']}>
                    <div className={styles['skill-item__progress']} style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className={styles['skill-item']}>
                  <span className={styles['skill-item__name']}>JavaScript</span>
                  <div className={styles['skill-item__bar']}>
                    <div className={styles['skill-item__progress']} style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles['skill-category']}>
              <h3 className={styles['skill-category__title']}>ツール・その他</h3>
              <div className={styles['skill-category__items']}>
                <div className={styles['skill-item']}>
                  <span className={styles['skill-item__name']}>Git</span>
                  <div className={styles['skill-item__bar']}>
                    <div className={styles['skill-item__progress']} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className={styles['skill-item']}>
                  <span className={styles['skill-item__name']}>Vite</span>
                  <div className={styles['skill-item__bar']}>
                    <div className={styles['skill-item__progress']} style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className={styles['skill-item']}>
                  <span className={styles['skill-item__name']}>Figma</span>
                  <div className={styles['skill-item__bar']}>
                    <div className={styles['skill-item__progress']} style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className={styles['skill-item']}>
                  <span className={styles['skill-item__name']}>Node.js</span>
                  <div className={styles['skill-item__bar']}>
                    <div className={styles['skill-item__progress']} style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timeline}>
        <div className="container">
          <h2 className="section-title">経歴</h2>
          <div className={styles['timeline__content']}>
            <div className={styles['timeline-item']}>
              <div className={styles['timeline-item__date']}>2024年</div>
              <div className={styles['timeline-item__content']}>
                <h3 className={styles['timeline-item__title']}>フリーランス開発者として活動開始</h3>
                <p className={styles['timeline-item__description']}>
                  Web制作・アプリ開発のフリーランスとして活動を開始。
                  React、TypeScriptを中心とした開発に従事。
                </p>
              </div>
            </div>

            <div className={styles['timeline-item']}>
              <div className={styles['timeline-item__date']}>2023年</div>
              <div className={styles['timeline-item__content']}>
                <h3 className={styles['timeline-item__title']}>プログラミング学習開始</h3>
                <p className={styles['timeline-item__description']}>
                  独学でHTML、CSS、JavaScriptから学習をスタート。
                  その後React、TypeScriptへと学習範囲を拡大。
                </p>
              </div>
            </div>

            <div className={styles['timeline-item']}>
              <div className={styles['timeline-item__date']}>2022年</div>
              <div className={styles['timeline-item__content']}>
                <h3 className={styles['timeline-item__title']}>Web開発に興味を持つ</h3>
                <p className={styles['timeline-item__description']}>
                  デジタル化の波とWebテクノロジーの可能性に魅力を感じ、
                  Web開発の世界に足を踏み入れる決意を固める。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
