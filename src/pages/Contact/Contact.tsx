import { useState } from 'react'
import { Button } from '../../components/ui/Button/Button'
import styles from './Contact.module.css'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 実際の送信処理はここに実装
    // 今回は送信機能は不要との要件なので、フォームの動作のみ
    setTimeout(() => {
      alert('お問い合わせありがとうございます！（実際の送信機能は実装されていません）')
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className={styles.contact}>
      <section className={styles['contact-hero']}>
        <div className="container">
          <div className={styles['contact-hero__content']}>
            <h1 className={styles['contact-hero__title']}>お問い合わせ</h1>
            <p className={styles['contact-hero__subtitle']}>
              ご質問やご相談がございましたら、お気軽にお声がけください。
            </p>
          </div>
        </div>
      </section>

      <section className={styles['contact-content']}>
        <div className="container">
          <div className={styles['contact__grid']}>
            {/* Contact Form */}
            <div className={styles['contact-form-wrapper']}>
              <h2 className={styles['contact-form__title']}>メッセージを送信</h2>
              <form className={styles['contact-form']} onSubmit={handleSubmit}>
                <div className={styles['form-group']}>
                  <label htmlFor="name" className={styles['form-label']}>お名前 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles['form-input']}
                    required
                  />
                </div>

                <div className={styles['form-group']}>
                  <label htmlFor="email" className={styles['form-label']}>メールアドレス *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles['form-input']}
                    required
                  />
                </div>

                <div className={styles['form-group']}>
                  <label htmlFor="subject" className={styles['form-label']}>件名 *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles['form-input']}
                    required
                  />
                </div>

                <div className={styles['form-group']}>
                  <label htmlFor="message" className={styles['form-label']}>メッセージ *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles['form-textarea']}
                    rows={5}
                    required
                  ></textarea>
                </div>

                <div className={styles['form-actions']}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                  >
                    送信する
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles['contact-info']}>
              <h2 className={styles['contact-info__title']}>お問い合わせ先</h2>

              <div className={styles['contact-info__item']}>
                <h3 className={styles['contact-info__label']}>メール</h3>
                <p className={styles['contact-info__value']}>
                  <a href="mailto:example@example.com">example@example.com</a>
                </p>
              </div>

              <div className={styles['contact-info__item']}>
                <h3 className={styles['contact-info__label']}>ソーシャルメディア</h3>
                <div className={styles['social-links']}>
                  <a href="https://github.com" className={styles['social-link']} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://linkedin.com" className={styles['social-link']} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com" className={styles['social-link']} target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </div>
              </div>

              <div className={styles['contact-info__item']}>
                <h3 className={styles['contact-info__label']}>レスポンス時間</h3>
                <p className={styles['contact-info__value']}>
                  通常24時間以内にご返信いたします。
                </p>
              </div>

              <div className={styles['contact-info__note']}>
                <p>
                  プロジェクトのご相談や技術的なお問い合わせ、
                  お仕事のご依頼などお気軽にご連絡ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
