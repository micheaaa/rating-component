import type {ChangeEvent} from 'react'
import {cva} from 'class-variance-authority'
import {observable} from '@legendapp/state'

import {ReactComponent as Star} from '~/assets/icon-star.svg'
import {ReactComponent as Transaction} from '~/assets/illustration-thank-you.svg'

import s from '../RatingCardSass/RatingCardSass.module.scss'

interface Rating {
  prev: number | undefined;
  val: number | undefined;
}

const card = cva(s.card, {
  variants: {
    result: {true: s.result}
  }
})

const rating = observable<Rating>({prev: 5, val: undefined})

function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()

  const form = new FormData(e.currentTarget)
  const rate = form.get('rating')

  rate && rating.set?.(({val}) => ({prev: val, val: +rate}))
}
     
function RatingScreen() {
  const previousRating = rating.prev.get?.()

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

function ResultScreen() {
  return (
    <div className={s.result_screen}>
      <Transaction />
      <span className={s.result_banner}>You have selected {rating.val} out of 5</span>
      <section>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </section>
      <button
        onClick={
          () => rating.set?.(({val}) => ({prev: val, val: undefined}))
        }>
        Edit
      </button>
    </div>
  )
}

export function RatingCardLegendState() {
  const hasRating = !!rating.val.get?.()

  return (
    <section className={card({result: hasRating})}>
      {!hasRating ? <RatingScreen /> : <ResultScreen />}
    </section>
  )
}
