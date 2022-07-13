const apiFormatter = (OUT_STAT = "", OUT_MESS = "", OUT_DATA = []) => {
  if (OUT_STAT === "T") {
    const result = {
      OUT_STAT: OUT_STAT,
      OUT_MESS: OUT_MESS,
      OUT_DATA: OUT_DATA,
    };
    return result;
  } else {
    const result = {
      OUT_STAT: OUT_STAT,
      OUT_MESS: OUT_MESS,
      OUT_DATA: [],
    };
    return result;
  }
};

module.exports = apiFormatter;
