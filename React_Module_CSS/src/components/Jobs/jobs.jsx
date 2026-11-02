import { Bookmark } from 'lucide-react'
import styles from './jobs.module.css'

const Card = ({
  brandLogo,
  companyName,
  datePosted,
  post,
  tag1,
  tag2,
  pay,
  location,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={brandLogo} alt={`${companyName} logo`} />
        <button aria-label={`Save ${post}`}><Bookmark /></button>
      </div>

      <div className={styles.center}>
        <h3>{companyName}<span>{datePosted}</span></h3>
        <h2>{post}</h2>
        <div className={styles.tag}>
          <h4>{tag1}</h4>
          <h4>{tag2}</h4>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>
          <h3>{pay}</h3>
          <p>{location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
