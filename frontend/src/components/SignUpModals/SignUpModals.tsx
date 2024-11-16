import ModalForm from "../ui/ModalForm";

type SignUpProps = {
  onClose: () => void;
  openSignIn: () => void;
};

export default function SignUpModals({ onClose, openSignIn }: SignUpProps) {
  return (
    <ModalForm
      onClose={onClose}
      title="S'inscrire"
      buttonText="Créer un compte"
      inputs={[
        "chooser@gmail.com",
        "Mot de passe",
        "Confirmer le mot de passe",
      ]}
      footerText="Déjà un compte ?"
      footerActionText="Connectez-vous"
      onFooterAction={openSignIn}
    />
  );
}
