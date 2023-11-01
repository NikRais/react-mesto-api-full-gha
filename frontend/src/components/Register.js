import { Link } from 'react-router-dom';
import useFormValidation from '../hooks/useFormValidation';

const Register = ({ onRegister }) => {
  const { enteredValues, errors, handleChange } = useFormValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(enteredValues);
  };

  return (
    <>
      <div className="auth">
        <h2 className="auth__title">Регистрация</h2>
        <form className="form auth__form" onSubmit={handleSubmit}>
          <input
            value={enteredValues.email || ''}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
            onChange={handleChange}
          />
          <span className="auth__error">{errors.email}</span>

          <input
            value={enteredValues.password || ''}
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="password"
            required
            onChange={handleChange}
          />
          <span className="auth__error">{errors.password}</span>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
      <Link to="/sign-in" className="auth__login-hint">Уже зарегистрированы? Войти</Link>
    </>
  );
};

export default Register;