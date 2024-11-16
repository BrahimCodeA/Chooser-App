import ModalForm from "../ui/ModalForm";

type SignInProps = {
  onClose: () => void;
  openSignUp: () => void;
};

export default function SignInModals({ onClose, openSignUp }: SignInProps) {
  return (
    <ModalForm
      onClose={onClose}
      title="Connexion"
      buttonText="Se connecter"
      inputs={["chooser@gmail.com", "Mot de passe"]}
      footerText="Pas de compte ?"
      footerActionText="Inscrivez-vous"
      onFooterAction={openSignUp}
    />
  );
}
