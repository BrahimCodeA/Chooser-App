type LoginComponentProps = {
  title: string;
  subTitle: string;
  labels: string[];
  inputs: { type: string; placeholder: string; name: string }[];
  values: { email: string; password: string };
  errorMessage: string;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

const LoginComponent = ({
  title,
  subTitle,
  labels,
  inputs,
  values,
  errorMessage,
  className,
  onChange,
  onSubmitHandler,
}: LoginComponentProps) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <form onSubmit={onSubmitHandler} className="login-form">
        {inputs.map((input, index) => (
          <div key={index} className="form-group">
            <label className="form-label">{labels[index]}</label>
            <input
              className="form-input"
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              value={values[input.name as keyof typeof values]}
              onChange={onChange}
              required
            />
          </div>
        ))}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
