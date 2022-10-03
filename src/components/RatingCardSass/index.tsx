import {ChangeEvent, Dispatch, SetStateAction, useState} from 'react'
import {cva} from 'class-variance-authority'

import {ReactComponent as Star} from '~/assets/icon-star.svg'
import {ReactComponent as Transaction} from '~/assets/illustration-thank-you.svg'

import s from './RatingCardSass.module.scss'

interface Rating {
  prev?: number;
  val?: number;
}

interface RatingScreenProps {
  previousRating?: number;
  setRating: Dispatch<SetStateAction<Rating>>;
}
interface ResultScreenProps extends RatingScreenProps {
  rating: number;
}

const card = cva(s.card, {
  variants: {
    result: {true: s.result}
  }
})

function RatingScreen({previousRating, setRating}: RatingScreenProps) {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const rating = form.get('rating')

    rating && setRating(({val}) => ({prev: val, val: +rating}))
  }

  return (
    <form className={s.rating_screen} onSubmit={handleSubmit}>
      <span className={s.icon}><Star /></span>
      <section>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </section>
      <section className={s.rating_section}>
        {Array.from({length: 5}, (_, i) =>
          <span key={i}>
            <input
              type="radio"
              id={`rated-${i}`}
              name="rating"
              value={i + 1}
              defaultChecked={i + 1 === previousRating} />
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
    <div className={s.result_screen}>
      <Transaction />
      <span className={s.result_banner}>You have selected {rating} out of 5</span>
      <section>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </section>
      <button onClick={() => setRating({prev: rating, val: undefined})}>
        Edit
      </button>
    </div>
  )
}

export function RatingCardSass() {
  const [rating, setRating] = useState<Rating>({})

  return (
    <section className={card({result: !!rating.val})}>
      {
        !rating.val
          ? <RatingScreen previousRating={rating.prev} setRating={setRating} />
          : <ResultScreen rating={rating.val} setRating={setRating} />
      }
    </section>
  )
}
