const jwt = require('jsonwebtoken');


const authenticate=(req, res, next)=> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication token missing' });
    }
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid authentication token' });
      }
      req.user = decoded;
      next();
    });
  }

module.exports = authenticate