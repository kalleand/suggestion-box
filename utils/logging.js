var requestLog = function (req, res, next) {
  console.log('[%s] %s %s %s %s', 
      (new Date()).toLocaleString('sv-SE', {}),
      req.ip,
      req.method,
      req.originalUrl,
      (req.body !== undefined ? ' ' + req.body : ''));
  next();
}

module.exports.requestLog = requestLog
