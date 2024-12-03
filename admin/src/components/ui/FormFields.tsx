// Composant pour un champ texte ou numérique
export const InputField = ({
  type,
  value,
  placeholder,
  onChange,
  required = false,
  disabled = false,
}: {
  type: string;
  value: string | number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
}) => (
  <input
    type={type}
    className="form-input"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
    disabled={disabled}
  />
);

// Composant pour une zone de texte
export const TextAreaField = ({
  value,
  placeholder,
  onChange,
  required = false,
}: {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) => (
  <textarea
    className="form-textarea"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

// Composant pour une case à cocher
export const CheckboxField = ({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <label className="form-checkbox-label">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="form-checkbox"
    />
    {label}
  </label>
);

// Composant pour un menu déroulant
export const SelectField = ({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <select className="form-select" value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

// Composant pour l'upload d'image
export const ImageUploader = ({
  image,
  onImageChange,
  placeholderImg,
}: {
  image: File | null;
  onImageChange: (file: File) => void;
  placeholderImg: string;
}) => (
  <label className="form-image-upload">
    <img
      src={image ? URL.createObjectURL(image) : placeholderImg}
      alt="Image preview"
      className="form-image-preview"
    />
    <input
      type="file"
      onChange={(e) => e.target.files && onImageChange(e.target.files[0])}
      hidden
    />
  </label>
);
