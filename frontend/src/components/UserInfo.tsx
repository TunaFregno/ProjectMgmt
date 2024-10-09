import { UserType } from "./Users";
import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

export default function UserInfo({ name, email, phone }: UserType) {
  return (
    <>
      <div className="mt-4">
        <ul className="list-group">
          <li className="list-group-item">
            <FaIdBadge className="me-3" />
            {name}
          </li>
          <li className="list-group-item">
            <FaEnvelope className="me-3" />
            {email}
          </li>
          <li className="list-group-item">
            <FaPhone className="me-3" />
            {phone}
          </li>
        </ul>
      </div>
    </>
  );
}
