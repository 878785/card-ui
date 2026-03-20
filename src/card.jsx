import './App.css'

const Card = (props) => {
  return (
    <div className="card">

      <div className="Top">
        <div className="main-logo">
          <img src={props.logo} alt="Profile" />
        </div>

        <div className="bookmark">
          <button>
            <b>Save</b>
          </button>
        </div>
      </div>

      <div className="Center">
        <div className="Need_IMF">
          <h2>{props.company}</h2>
          <span>{props.post}</span>
          <h3>{props.title}</h3>
        </div>

        <div className="work_Time">
          <div className="part_time">{props.tag1}</div>
          <div className="part_time">{props.tag2}</div>
        </div>
      </div>

      <div className="hour">
        <h3>${props.pay}/hr</h3>
        <p>{props.location}</p>
      </div>

      <div className="Apply_btn">
        <button>Apply now</button>
      </div>

    </div>
  )
}

export default Card;
