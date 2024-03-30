function Rating({children}) {
  return (
    <div>
        <h5><i className="fa fa-star" aria-hidden="true">{Math.round(children)}</i></h5>
        <h5><i className="fa fa-star-o" aria-hidden="true"></i></h5>
    </div>
  )
}

export default Rating;