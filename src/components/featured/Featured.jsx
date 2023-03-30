import './featured.scss'
import { MdInfoOutline, MdPlayArrow } from "react-icons/md"

const Featured = ({ type }) => {
    return (
        <div className="featured">
            {
                type && (
                    <div className="category">
                        <span>
                            {type == 'movie' ? "Movies" : "Series"}
                        </span>
                        <select name="genre" id="genre">
                            <option value="">Genre</option>
                            <option value="">Adventure</option>
                            <option value="">Comedy</option>
                            <option value="">Crime</option>
                            <option value="">Fantasy</option>
                            <option value="">Historical</option>
                            <option value="">Horror</option>
                            <option value="">Romance</option>
                            <option value="">Sci-fi</option>
                            <option value="">Thriller</option>
                            <option value="">Western</option>
                            <option value="">Animation</option>
                            <option value="">Drama</option>
                            <option value="">Documentary</option>
                        </select>
                    </div>
                )
            }
            <img src="https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

            <div className="info">
                <img src="https://www.clipartmax.com/png/full/333-3330466_ths-horror-movie-name-png.png" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quasi aliquid facilis fuga laudantium, eaque recusandae nobis sit qui vitae fugit repellat, fugiat saepe adipisci quis. Unde laudantium officiis animi!
                </span>
                <div className="buttons">
                    <button className='playBtn'>
                        <MdPlayArrow />
                        <span>Play</span>
                    </button>
                    <button className='infoBtn'>
                        <MdInfoOutline />
                        Info
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Featured