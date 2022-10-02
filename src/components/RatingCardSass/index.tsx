import {ChangeEvent, useState} from 'react'
import {cva} from 'class-variance-authority'

import {ReactComponent as Star} from '~/assets/icon-star.svg'
import {ReactComponent as Transaction} from '~/assets/illustration-thank-you.svg'

import styles from './RatingCardSass.module.scss'

interface RatingScreenProps {
  setRating: (v?: number) => void
}
interface ResultScreenProps extends RatingScreenProps {
  rating: number
}

const card = cva(styles.card, {
  variants: {
    result: {true: styles.result}
  }
})

function RatingScreen({setRating}: RatingScreenProps) {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const rating = form.get('rating')

    rating && setRating(+rating)
  }

  return (
    <form className={styles.ratingScreen} onSubmit={handleSubmit}>
      <span className={styles.icon}><Star /></span>
      <section>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </section>
      <section className={styles.ratingSection}>
        {Array.from({length: 5}, (_, i) =>
          <span key={i}>
            <input
              type="radio"
              id={`rated-${i}`}
              name="rating"
              value={i + 1}
              defaultChecked={i === 4} />
            <label htmlFor={`rated-${i}`}>{i + 1}</label>
          </span>
        )}
      </section>
      <button type="submit">Submit</button>
    </form>
  )
}

function ResultScreen({rating, setRating}: ResultScreenProps) {
  return (
    <div className={styles.resultScreen}>
      <Transaction />
      <span className={styles.resultBanner}>You have selected {rating} out of 5</span>
      <section>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </section>
      <button onClick={() => setRating(undefined)}>Edit</button>
    </div>
  )
}

export function RatingCardSass() {
  const [rating, setRating] = useState<number | undefined>()

  return (
    <section className={card({result: !!rating})}>
      {
        !rating
          ? <RatingScreen setRating={setRating} />
          : <ResultScreen rating={rating} setRating={setRating} />
      }
    </section>
  )
}
