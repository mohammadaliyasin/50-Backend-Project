exports.uploadFile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json("No file uploaded");
    }

    res.json({
      success: true,
      file: req.file.filename,
      url: `http://localhost:3000/uploads/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
