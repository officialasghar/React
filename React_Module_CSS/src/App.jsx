import Card from './components/Jobs/jobs'
import Profile from './components/Profile/profile'
import styles from './App.module.css'

const jobOpenings = [
  { brandLogo: 'https://pngimg.com/uploads/meta/meta_PNG12.png', companyName: 'Meta', datePosted: '5 days ago', post: 'Frontend Engineer', tag1: 'Full Time', tag2: 'Junior Level', pay: '$65/hour', location: 'Menlo Park, USA' },
  { brandLogo: 'https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg', companyName: 'Amazon', datePosted: '2 weeks ago', post: 'Backend Developer', tag1: 'Full Time', tag2: 'Mid Level', pay: '$70/hour', location: 'Hyderabad, India' },
  { brandLogo: 'https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg', companyName: 'Apple', datePosted: '3 weeks ago', post: 'iOS Developer', tag1: 'Part Time', tag2: 'Senior Level', pay: '$90/hour', location: 'Cupertino, USA' },
  { brandLogo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456', companyName: 'Netflix', datePosted: '10 days ago', post: 'Machine Learning Engineer', tag1: 'Full Time', tag2: 'Senior Level', pay: '$110/hour', location: 'Los Gatos, USA' },
  { brandLogo: 'https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png', companyName: 'Microsoft', datePosted: '4 weeks ago', post: 'Data Scientist', tag1: 'Full Time', tag2: 'Junior Level', pay: '$75/hour', location: 'Redmond, USA' },
  { brandLogo: 'https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png', companyName: 'Tesla', datePosted: '6 days ago', post: 'Software Engineer', tag1: 'Full Time', tag2: 'Mid Level', pay: '$80/hour', location: 'Austin, USA' },
  { brandLogo: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg', companyName: 'NVIDIA', datePosted: '3 weeks ago', post: 'GPU Programmer', tag1: 'Full Time', tag2: 'Senior Level', pay: '$120/hour', location: 'Santa Clara, USA' },
  { brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s', companyName: 'Oracle', datePosted: '8 days ago', post: 'Database Administrator', tag1: 'Full Time', tag2: 'Mid Level', pay: '$70/hour', location: 'Mumbai, India' },
]

const profiles = [
  { companyName: 'Microsoft', name: 'Austin Ortiz', role: 'Marketing Manager', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', id: '0000060816', dob: '06/08/16', email: 'austin@gmail.com', phone: '946 385 921' },
  { companyName: 'Google', name: 'Sophia Carter', role: 'Product Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', id: '0000060817', dob: '09/12/94', email: 'sophia@gmail.com', phone: '946 385 922' },
  { companyName: 'Amazon', name: 'Daniel Lee', role: 'Software Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', id: '0000060818', dob: '11/04/92', email: 'daniel@gmail.com', phone: '946 385 923' },
  { companyName: 'Meta', name: 'Olivia Brown', role: 'HR Specialist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', id: '0000060819', dob: '15/07/95', email: 'olivia@gmail.com', phone: '946 385 924' },
  { companyName: 'Apple', name: 'Noah Wilson', role: 'Sales Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', id: '0000060820', dob: '22/02/91', email: 'noah@gmail.com', phone: '946 385 925' },
  { companyName: 'Netflix', name: 'Emma Davis', role: 'Business Analyst', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', id: '0000060821', dob: '03/10/93', email: 'emma@gmail.com', phone: '946 385 926' },
  { companyName: 'Tesla', name: 'James Miller', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', id: '0000060822', dob: '18/05/90', email: 'james@gmail.com', phone: '946 385 927' },
  { companyName: 'Oracle', name: 'Mia Anderson', role: 'UI Designer', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400', id: '0000060823', dob: '27/09/96', email: 'mia@gmail.com', phone: '946 385 928' },
]

const App = () => {
  return (
    <div className={styles.parent}>
      <section className={styles.jobs}>
        <h2>Jobs</h2>
        <div className={styles.jobsList}>
          {jobOpenings.map((jobs) => (
            <Card
              key={jobs.companyName}
              {...jobs}
            />
          ))}
        </div>
      </section>

      <section className={styles.profilesSection}>
        <h2>Profiles</h2>
        <div className={styles.profiles}>
          {profiles.map((profile) => (
            <Profile key={profile.id} {...profile} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
