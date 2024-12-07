// Composant pour un champ texte ou numérique
type InputFieldProps = {
  type: string;
  value: string | number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

export const InputField = ({
  type,
  value,
  placeholder,
  onChange,
  required = false,
  disabled = false,
}: InputFieldProps) => (
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
type TextAreaFieldProps = {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
};

export const TextAreaField = ({
  value,
  placeholder,
  onChange,
  required = false,
}: TextAreaFieldProps) => (
  <textarea
    className="form-textarea"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

// Composant pour une case à cocher
type CheckboxFieldProps = {
  checked: boolean;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxField = ({
  checked,
  label,
  onChange,
}: CheckboxFieldProps) => (
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
type SelectFieldProps = {
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectField = ({ value, options, onChange }: SelectFieldProps) => (
  <select className="form-select" value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

// Composant pour l'upload d'image
type ImageUploaderProps = {
  image: File | null;
  onImageChange: (file: File) => void;
  placeholderImg: string;
};

export const ImageUploader = ({
  image,
  onImageChange,
  placeholderImg,
}: ImageUploaderProps) => (
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
