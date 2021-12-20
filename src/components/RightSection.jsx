import ImageBox from './ImageBox';

const RightSection = (props) => {

  return (
    <>
      <div className="row">
        {
          props.p_data.map((val, index) => {
            let hits = props.p_hits[index]
            let pid = props.pid[index]
            return <ImageBox pname={val.name} src={val.img} key={index} price={hits} pid={pid} />
          })
        }
      </div>
    </>
  )
}

export default RightSection
