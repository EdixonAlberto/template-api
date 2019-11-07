const { Router } = require('express');

const router = Router();

/* LIST ROUTES */
router.use('/', (req, res) => {
  res.json({ testResponse: 'ok' });
});

module.exports = router;
