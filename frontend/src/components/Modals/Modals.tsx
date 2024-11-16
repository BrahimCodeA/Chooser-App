import "./Modals.scss";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { RxAvatar } from "react-icons/rx";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import SignInModals from "../SignInModals/SignInModals";
import SignUpModals from "../SignUpModals/SignUpModals";
import { Link } from "react-router-dom";

type ModalType = "signIn" | "signUp" | null;

export default function Modals() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  const openModal = (modalType: ModalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <div
        className="avatar-modals"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <RxAvatar className="user-icon" />
        {isHovered && (
          <div className="avatar-modals-links">
            <Link to="/profile">
              <button className="btn-account">
                Mon profil <VscAccount />
              </button>
            </Link>
            <button className="btn-signin" onClick={() => openModal("signIn")}>
              Connexion <FaSignInAlt />
            </button>
            <button className="btn-signup" onClick={() => openModal("signUp")}>
              Inscription <FaUserPlus />
            </button>
          </div>
        )}
      </div>

      {activeModal === "signIn" && (
        <SignInModals
          onClose={closeModal}
          openSignUp={() => openModal("signUp")}
        />
      )}
      {activeModal === "signUp" && (
        <SignUpModals
          onClose={closeModal}
          openSignIn={() => openModal("signIn")}
        />
      )}
    </>
  );
}
