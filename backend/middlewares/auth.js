const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  /* Достаём авторизационный заголовок */
  const { authorization } = req.headers;

  /* Убеждаемся, что он есть или начинается с Bearer */
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация.');
  }

  /* Извлечём токен */
  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    /* Попытаемся верифицировать токен */
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'top-secret-key');
  } catch (err) {
    /* Отправим ошибку, если не получилось */
    throw new UnauthorizedError('Необходима авторизация.');
  }

  req.user = payload; /* Записываем пейлоуд в объект запроса */

  next(); /* Пропускаем запрос дальше */
};
