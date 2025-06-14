import { useState } from 'react'
import { Button } from '../../components/ui/Button/Button'
import styles from './Portfolio.module.css'

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Eコマースサイト',
      description: 'React + TypeScriptで構築したモダンなEコマースプラットフォーム。レスポンシブデザインとアクセシビリティを重視した設計。',
      category: 'web',
      technologies: ['React', 'TypeScript', 'CSS3', 'Node.js'],
      image: 'project1.jpg',
      demoUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example/project1'
    },
    {
      id: 2,
      title: 'タスク管理アプリ',
      description: 'チームでのプロジェクト管理を効率化するタスク管理アプリケーション。リアルタイム同期機能を実装。',
      category: 'app',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
      image: 'project2.jpg',
      demoUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example/project2'
    },
    {
      id: 3,
      title: 'ポートフォリオサイト',
      description: 'アニメーションと美しいデザインを特徴とするポートフォリオサイト。SEOとパフォーマンスを最適化。',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'SCSS'],
      image: 'project3.jpg',
      demoUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example/project3'
    },
    {
      id: 4,
      title: 'ブログプラットフォーム',
      description: 'Headless CMSを活用したブログプラットフォーム。マークダウンエディタとタグ機能を実装。',
      category: 'web',
      technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Styled Components'],
      image: 'project4.jpg',
      demoUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example/project4'
    },
    {
      id: 5,
      title: 'モバイルアプリ（PWA）',
      description: 'Progressive Web Appとして開発したモバイル向けアプリケーション。オフライン機能とプッシュ通知を実装。',
      category: 'app',
      technologies: ['React', 'PWA', 'Service Worker', 'IndexedDB'],
      image: 'project5.jpg',
      demoUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example/project5'
    },
    {
      id: 6,
      title: 'データ可視化ダッシュボード',
      description: 'リアルタイムデータを美しく可視化するダッシュボード。インタラクティブなチャートとフィルタリング機能。',
      category: 'app',
      technologies: ['React', 'D3.js', 'Chart.js', 'WebSocket'],
      image: 'project6.jpg',
      demoUrl: 'https://example.com',
      sourceUrl: 'https://github.com/example/project6'
    }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className={styles.portfolio}>
      <section className={styles['portfolio-hero']}>
        <div className="container">
          <div className={styles['portfolio-hero__content']}>
            <h1 className={styles['portfolio-hero__title']}>ポートフォリオ</h1>
            <p className={styles['portfolio-hero__subtitle']}>
              これまでに制作したプロジェクトをご紹介します。
            </p>
          </div>
        </div>
      </section>

      <section className={styles['portfolio-content']}>
        <div className="container">
          {/* Filter */}
          <div className={styles['portfolio-filter']}>
            <button
              className={`filter-button ${activeFilter === 'all' ? 'filter-button--active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              すべて
            </button>
            <button
              className={`filter-button ${activeFilter === 'web' ? 'filter-button--active' : ''}`}
              onClick={() => setActiveFilter('web')}
            >
              Webサイト
            </button>
            <button
              className={`filter-button ${activeFilter === 'app' ? 'filter-button--active' : ''}`}
              onClick={() => setActiveFilter('app')}
            >
              アプリケーション
            </button>
          </div>

          {/* Projects Grid */}
          <div className={styles['projects-grid']}>
            {filteredProjects.map(project => (
              <div key={project.id} className={styles['project-card']}>
                <div className={styles['project-card__image']}>
                  <div className={styles['project-card__placeholder']}>
                    Project Image
                  </div>
                  <div className={styles['project-card__overlay']}>
                    <div className={styles['project-card__actions']}>
                      <Button variant="outline" size="sm" href={project.demoUrl}>
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" href={project.sourceUrl}>
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                <div className={styles['project-card__content']}>
                  <h3 className={styles['project-card__title']}>{project.title}</h3>
                  <p className={styles['project-card__description']}>{project.description}</p>

                  <div className={styles['project-card__technologies']}>
                    {project.technologies.map(tech => (
                      <span key={tech} className={styles['technology-tag']}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className={styles['no-projects']}>
              <p>該当するプロジェクトが見つかりませんでした。</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
