import { Button } from '../../components/ui/Button/Button'

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white text-center flex items-center min-h-[calc(100vh-80px)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto w-full px-4">
            <h1 className="text-4xl font-bold leading-tight mb-6 md:text-5xl lg:text-6xl">
              Hello, I'm <span className="text-secondary-light">Your Name</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 opacity-90 md:text-xl">
              フロントエンド開発者として、美しく機能的なWebサイトを制作しています。
            </p>
            <div className="flex gap-4 justify-center items-center flex-wrap mt-2 max-sm:flex-col max-sm:items-stretch max-sm:gap-3">
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
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
      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Featured Works</h2>
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-base hover:-translate-y-1 hover:shadow-xl">
              <div className="w-full h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-medium">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">プロジェクト 1</h3>
                <p className="text-gray-600 leading-normal mb-4">
                  React + TypeScriptで構築したWebアプリケーション
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">CSS3</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-base hover:-translate-y-1 hover:shadow-xl">
              <div className="w-full h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-medium">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">プロジェクト 2</h3>
                <p className="text-gray-600 leading-normal mb-4">
                  レスポンシブデザインを活用したポートフォリオサイト
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="tag">HTML5</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-base hover:-translate-y-1 hover:shadow-xl">
              <div className="w-full h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-medium">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">プロジェクト 3</h3>
                <p className="text-gray-600 leading-normal mb-4">
                  Vite + Reactを使用した高速なWebアプリケーション
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="tag">Vite</span>
                  <span className="tag">React</span>
                  <span className="tag">CSS Modules</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button variant="primary" href="/portfolio">
              すべてのプロジェクトを見る
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}