import Blender from "../../assets/Programs/svgJsx/Blender.svg";
import Cinema from "../../assets/Programs/svgJsx/Cinema.svg";
import Illustrator from "../../assets/Programs/svgJsx/Illustrator.svg";
import Maya from "../../assets/Programs/svgJsx/Maya.svg";
import Photoshop from "../../assets/Programs/svgJsx/Photoshop.svg";
import Unity from "../../assets/Programs/svgJsx/Unity.svg";
import Unreal from "../../assets/Programs/svgJsx/Unreal.svg";
import ZBrush from "../../assets/Programs/svgJsx/ZBrush.svg";

export const Icons = ({ type }) => {
  const typeIcon = {
    Blender: {
      img: Blender,
      width: "100px",
    },
    Unity: {
      img: Unity,
      width: "90px",
    },
    Maya: {
      img: Maya,
      width: "50px",
    },
    ZBrush: {
      img: ZBrush,
      width: "100px",
    },
    Cinema: {
      img: Cinema,
      width: "50px",
    },
    Unreal: {
      img: Unreal,
      width: "50px",
    },
    Illustrator: {
      img: Illustrator,
      width: "50px",
    },
    Photoshop: {
      img: Photoshop,
      width: "50px",
    },
  };
  const defaultIcon = typeIcon.Blender;
  return <img src={typeIcon[type].img} alt="" width={typeIcon[type].width} />;
};
