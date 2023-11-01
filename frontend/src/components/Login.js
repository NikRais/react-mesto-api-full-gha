import useFormValidation from '../hooks/useFormValidation';

const Login = ({ onLogin }) => {
  const { enteredValues, errors, handleChange } = useFormValidation({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!enteredValues.email || !enteredValues.password) {
      return;
    }
    onLogin(enteredValues);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      
      <form className="form auth__form" onSubmit={handleSubmit} noValidate>
        <input
          value={enteredValues.email || ''}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          autoComplete="email"
          required
          onChange={handleChange}
        />
        <span className="auth__error">{errors.email}</span>

        <input
          value={enteredValues.password || ''}
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          autoComplete="password"
          required
          onChange={handleChange}
        />
        <span className="auth__error">{errors.password}</span>

        <button type="submit">Войти</button>
        <span className="auth__login-hint"></span>
      </form>
    </div>
  );
};

export default Login;