import ModalForm from "../ui/ModalForm/ModalForm";

type Props = {
  onClose: () => void;
  openSignIn: () => void;
};

export default function SignUpModals({ onClose, openSignIn }: Props) {
  return (
    <ModalForm
      onClose={onClose}
      title="S'inscrire"
      buttonText="Créer un compte"
      inputs={[
        { type: "email", placeholder: "chooser@gmail.com" },
        { type: "password", placeholder: "Mot de passe" },
        { type: "password", placeholder: "Confirmer le mot de passe" },
      ]}
      footerText="Déjà un compte ?"
      footerActionText="Connectez-vous"
      onFooterAction={openSignIn}
    />
  );
}
