const Url = require("../model/url_model");
const nanoid = require("nanoid");

exports.createShortUrl = async (req, res) => {
  try {
    const originalUrl = req.body;

    const shortCode = nanoid(6);

    const url = await Url.create({
      originalUrl,
      shortCode,
    });

    res.json({
      shortUrl: `http://localhost:3000/${shortCode}`,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const code = req.params;

    const url = await Url.findOne(code);

    if (!url) {
      return res.status(404).json("Not found");
    }

    url.clicks++;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
