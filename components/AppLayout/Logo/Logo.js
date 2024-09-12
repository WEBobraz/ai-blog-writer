import {
  faHandshake,
  faPencil,
  faPencilAlt,
  faPencilSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons/faBrain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Logo = () => {
  return (
    <div className="text-3xl text-center py-4 font-heading">
      AI Post Writer &nbsp;
      <FontAwesomeIcon icon={faPencilAlt} className="text-2xl text-slate-400" />
    </div>
  );
};
