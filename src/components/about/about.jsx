import './about.scss'
const img = '../../../Assets/images/campFire.jpg'
const About = () => {
  return (
    <div className="container">
      <div className="card">
        <div>
          <h3>Get Ready when you come!</h3>
          <h1>What do we do?</h1>
          <p>
            Every year, after an overwhelm winter <b>Woodjoy</b> likes to
            introduce new activities where people of all ages can enjoy and do,
            starting from March to September Woodjoy invites the most{' '}
            <b>risk-taker</b> people to come and book their favorite outdoor
            activities and bring their families and friends for an unforgettable
            memory.
          </p>
        </div>
        <div className="imageContainer">
          <img src={img} alt="campFire" className="picture" />
        </div>
      </div>
    </div>
  )
}
export default About
