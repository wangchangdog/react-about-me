import { useState } from 'react'
import { Button } from '../../components/ui/Button/Button'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'お名前は2文字以上で入力してください'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = '件名を入力してください'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'メッセージを入力してください'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'メッセージは10文字以上で入力してください'
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // リアルタイムバリデーション
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // 実際の送信処理はここに実装
    // 今回は送信機能は不要との要件なので、フォームの動作のみ
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="py-20 bg-theme-bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-theme-text-primary mb-6 lg:text-5xl">
              お問い合わせ
            </h1>
            <p className="text-lg leading-relaxed text-theme-text-secondary">
              ご質問やご相談がございましたら、お気軽にお声がけください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-custom">
          {isSubmitted && (
            <div className="max-w-2xl mx-auto mb-8 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
              <p className="font-medium">✅ お問い合わせありがとうございます！</p>
              <p className="text-sm mt-1">（実際の送信機能は実装されていません）</p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="bg-theme-card-bg p-8 rounded-lg shadow-theme-card-shadow border border-theme-card-border">
              <h2 className="text-2xl font-bold text-theme-text-primary mb-6">メッセージを送信</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-theme-text-primary mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md bg-theme-input-bg text-theme-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.name
                        ? 'border-red-500'
                        : 'border-theme-input-border focus:border-theme-input-focus-border'
                      }`}
                    placeholder="山田太郎"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-theme-text-primary mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md bg-theme-input-bg text-theme-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.email
                        ? 'border-red-500'
                        : 'border-theme-input-border focus:border-theme-input-focus-border'
                      }`}
                    placeholder="example@example.com"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-theme-text-primary mb-2">
                    件名 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md bg-theme-input-bg text-theme-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.subject
                        ? 'border-red-500'
                        : 'border-theme-input-border focus:border-theme-input-focus-border'
                      }`}
                    placeholder="お仕事のご依頼について"
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-theme-text-primary mb-2">
                    メッセージ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-md bg-theme-input-bg text-theme-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical ${errors.message
                        ? 'border-red-500'
                        : 'border-theme-input-border focus:border-theme-input-focus-border'
                      }`}
                    placeholder="プロジェクトの詳細や要件について..."
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="gaming"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full"
                    aria-label="フォームを送信"
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-theme-card-bg p-8 rounded-lg shadow-theme-card-shadow border border-theme-card-border">
                <h2 className="text-2xl font-bold text-theme-text-primary mb-6">お問い合わせ先</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-theme-text-primary mb-2">メール</h3>
                    <p className="text-theme-text-secondary">
                      <a
                        href="mailto:example@example.com"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        example@example.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-theme-text-primary mb-2">ソーシャルメディア</h3>
                    <div className="flex gap-4 flex-wrap">
                      <a
                        href="https://github.com"
                        className="px-4 py-2 bg-theme-bg-secondary text-theme-text-primary border border-theme-border-primary rounded-md hover:bg-primary hover:text-white transition-all duration-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com"
                        className="px-4 py-2 bg-theme-bg-secondary text-theme-text-primary border border-theme-border-primary rounded-md hover:bg-primary hover:text-white transition-all duration-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://twitter.com"
                        className="px-4 py-2 bg-theme-bg-secondary text-theme-text-primary border border-theme-border-primary rounded-md hover:bg-primary hover:text-white transition-all duration-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-theme-text-primary mb-2">レスポンス時間</h3>
                    <p className="text-theme-text-secondary">
                      通常24時間以内にご返信いたします。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-theme-bg-secondary p-6 rounded-lg border border-theme-border-primary">
                <p className="text-theme-text-secondary leading-relaxed">
                  プロジェクトのご相談や技術的なお問い合わせ、
                  お仕事のご依頼などお気軽にご連絡ください。
                  レスポンシブデザインとアクセシビリティを重視した
                  高品質なWebサイト制作をお手伝いいたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
