import {ReactComponent as Star} from '~/assets/icon-star.svg'

import {StyledCard, StyledRatingScreen} from './RatingCard.styles'

function RatingScreen() {
  return (
    <StyledRatingScreen>
      <span className="icon"><Star /></span>
      <section>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </section>
      <section className="rating-section">
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
    </StyledRatingScreen>
  )
}

export function RatingCard() {
  return (
    <StyledCard>
      <RatingScreen />
    </StyledCard>
  )
}
