import { useState } from 'react'
import './Blog.css'

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'React 18の新機能について',
      excerpt: 'React 18で導入された新しい機能について詳しく解説します。Concurrent FeaturesやSuspenseの改良点など...',
      category: 'tech',
      date: '2024年3月15日',
      readTime: '5分',
      image: 'blog1.jpg'
    },
    {
      id: 2,
      title: 'TypeScriptでより良いコードを書く方法',
      excerpt: 'TypeScriptの型システムを活用してより保守性の高いコードを書くためのテクニックをご紹介します...',
      category: 'tech',
      date: '2024年3月10日',
      readTime: '8分',
      image: 'blog2.jpg'
    },
    {
      id: 3,
      title: 'CSS Gridレイアウトの実践的な使い方',
      excerpt: 'CSS Gridを使った複雑なレイアウトの組み方から、レスポンシブデザインでの活用方法まで解説...',
      category: 'design',
      date: '2024年3月5日',
      readTime: '6分',
      image: 'blog3.jpg'
    },
    {
      id: 4,
      title: 'フロントエンド開発のワークフローを改善する',
      excerpt: '効率的なフロントエンド開発のためのツールやワークフローについて、実体験を交えて紹介します...',
      category: 'workflow',
      date: '2024年2月28日',
      readTime: '7分',
      image: 'blog4.jpg'
    },
    {
      id: 5,
      title: 'Webアクセシビリティの基礎知識',
      excerpt: 'すべてのユーザーにとって使いやすいWebサイトを作るためのアクセシビリティの基本について...',
      category: 'design',
      date: '2024年2月20日',
      readTime: '10分',
      image: 'blog5.jpg'
    },
    {
      id: 6,
      title: 'パフォーマンス最適化のベストプラクティス',
      excerpt: 'Webサイトの読み込み速度を改善するための実践的な最適化テクニックをまとめました...',
      category: 'tech',
      date: '2024年2月15日',
      readTime: '9分',
      image: 'blog6.jpg'
    }
  ]

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <div className="blog">
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">ブログ</h1>
            <p className="blog-hero__subtitle">
              Web開発に関する技術記事や学んだことを発信しています。
            </p>
          </div>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          {/* Category Filter */}
          <div className="blog-filter">
            <button
              className={`filter-button ${activeCategory === 'all' ? 'filter-button--active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              すべて
            </button>
            <button
              className={`filter-button ${activeCategory === 'tech' ? 'filter-button--active' : ''}`}
              onClick={() => setActiveCategory('tech')}
            >
              技術
            </button>
            <button
              className={`filter-button ${activeCategory === 'design' ? 'filter-button--active' : ''}`}
              onClick={() => setActiveCategory('design')}
            >
              デザイン
            </button>
            <button
              className={`filter-button ${activeCategory === 'workflow' ? 'filter-button--active' : ''}`}
              onClick={() => setActiveCategory('workflow')}
            >
              ワークフロー
            </button>
          </div>

          {/* Blog Posts Grid */}
          <div className="blog-posts">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-post">
                <div className="blog-post__image">
                  <div className="blog-post__placeholder">Blog Image</div>
                  <div className="blog-post__category">
                    {post.category === 'tech' && '技術'}
                    {post.category === 'design' && 'デザイン'}
                    {post.category === 'workflow' && 'ワークフロー'}
                  </div>
                </div>

                <div className="blog-post__content">
                  <div className="blog-post__meta">
                    <span className="blog-post__date">{post.date}</span>
                    <span className="blog-post__read-time">{post.readTime}で読める</span>
                  </div>

                  <h2 className="blog-post__title">
                    <a href={`/blog/${post.id}`} className="blog-post__link">
                      {post.title}
                    </a>
                  </h2>

                  <p className="blog-post__excerpt">{post.excerpt}</p>

                  <a href={`/blog/${post.id}`} className="blog-post__read-more">
                    続きを読む →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <p>該当する記事が見つかりませんでした。</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
