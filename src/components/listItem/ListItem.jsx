import { useState } from "react";
import {
  MdAdd,
  MdOutlineThumbDownOffAlt,
  MdOutlineThumbUpOffAlt,
  MdPlayArrow,
} from "react-icons/md";
import "./listItem.scss";

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = 'https://vimeo.com/810970596'

  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    >
      <img
        src="https://i.pinimg.com/564x/f6/d3/e3/f6d3e3f8351cc091ecd8ed109a2f95ed.jpg"
        alt=""
      />
      {
        isHovered && (
          <video src={trailer} autoPlay loop></video>
        )
      }
      <div className="itemInfo">
        <div className="icons">
          <MdPlayArrow className="icon" />
          <MdAdd className="icon" />
          <MdOutlineThumbUpOffAlt className="icon" />
          <MdOutlineThumbDownOffAlt className="icon" />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          accusantium nostrum eos id dolorum voluptatibus!
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
};
export default ListItem;
