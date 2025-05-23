module.exports = (req, res, next) => {
  const timestamp = new Date().toISOString();

  //cuerpo
  const body = req.body ? JSON.stringify(req.body) : 'No body';

  //header
  const headers = req.headers['authorization']
    ? `Authorization: ${req.headers['authorization']}`
    : 'No Authorization header';

  console.log(
    `[${timestamp}] ${req.method} ${req.originalUrl} - Body: ${body} - Headers: ${headers}`,
  );

  res.on('finish', () => {
    const statusCode = res.statusCode;
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl} - Status: ${statusCode}`);
  });

  next();
};
