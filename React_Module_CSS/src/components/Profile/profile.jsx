import styles from './profile.module.css'

const Profile = ({ companyName = 'COMPANY NAME', name, role, image, id, dob, email, phone }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileHeader}>
        <span>{companyName}</span>
      </div>

      <div className={styles.profileBody}>
        <img className={styles.profileImage} src={image} alt={name} />
        <h2>{name}</h2>
        <p className={styles.profileRole}>{role}</p>

        <div className={styles.profileDetails}>
          <p><strong>ID No:</strong> <span>{id}</span></p>
          <p><strong>DOB:</strong> <span>{dob}</span></p>
          <p><strong>Email:</strong> <span>{email}</span></p>
          <p><strong>Phone:</strong> <span>{phone}</span></p>
        </div>
      </div>
      <div className={styles.profileFooter} aria-hidden="true">
        <span className={styles.profileFooterBlue} />
        <span className={styles.profileFooterDark} />
      </div>
    </div>
  )
}

export default Profile
