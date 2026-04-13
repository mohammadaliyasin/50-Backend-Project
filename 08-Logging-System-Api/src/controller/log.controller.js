const Log = require("../model/log.model");

exports.getLogs = async (req, res) => {
  try {
    const { status, method } = req.query;
    let query = {};

    if (status) query.status = status;
    if (method) query.method = method;

    const logs = await Log.find(query).sort({ timestamp: -1 });

    res.json({
      success: true,
      data: logs,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};
