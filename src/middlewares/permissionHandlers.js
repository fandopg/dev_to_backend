const adminHandler = async (req, res, next) => {
  try {
    console.log("req.params", req.params);
    const { role } = req.params.tokenPayload;

    if (role !== "admin") {
      throw new Error("No tienes permisos para realizar esta acción");
    }

    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { adminHandler };
