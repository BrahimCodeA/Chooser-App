import ModalForm from "../ui/ModalForm/ModalForm";

type SignInModalsProps = {
  onClose: () => void;
  openSignUp: () => void;
};

export default function SignInModals({
  onClose,
  openSignUp,
}: SignInModalsProps) {
  return (
    <ModalForm
      onClose={onClose}
      title="Connexion"
      buttonText="Se connecter"
      inputs={[
        { type: "email", placeholder: "chooser@gmail.com" },
        { type: "password", placeholder: "Mot de passe" },
      ]}
      footerText="Pas de compte ?"
      footerActionText="Inscrivez-vous"
      onFooterAction={openSignUp}
    />
  );
}
