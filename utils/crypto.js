const NodeRSA = require("node-rsa");

const sendKey = () => {};

const cryptData = () => {};

const decryptData = () => {};

module.exports = {
  sendKey,
  cryptData,
  decryptData,
};

// const sendKey = async (req, res) => {
//   const key = new NodeRSA({ b: 512 });
//   const publicKey = key.exportKey("public");
//   const privateKey = key.exportKey("private");
//   res.status(StatusCodes.OK).json({ publicKey, privateKey });
// };

// const cryptData = async (req, res) => {
//   const { data, publicKey } = req.body;
//   if (!data || !publicKey) {
//     throw new CustomError.BadRequestError("please provide data and publicKey");
//   }
//   const key = new NodeRSA();
//   key.importKey(publicKey, "public");
//   const encryptedData = key.encrypt(data, "base64");
//   res.status(StatusCodes.OK).json({ encryptedData });
// };

// const decryptData = async (req, res) => {
//   const { data, privateKey } = req.body;
//   if (!data) {
//     throw new CustomError.BadRequestError("please provide data");
//   }
//   const key = new NodeRSA();
//   key.importKey(privateKey, "private");
//   const decryptedData = key.decrypt(data, "utf8");
//   res.status(StatusCodes.OK).json({ decryptedData });
// };
