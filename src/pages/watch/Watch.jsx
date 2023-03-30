import { MdArrowBack } from 'react-icons/md'
import './watch.scss'

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <MdArrowBack />
            Home
        </div>

        <video src="" className='video' autoPlay progress controls> </video>
    </div>
  )
}
export default Watch