require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const PRIVATE_KEY = process.env.PRIV_KEY;
const QUICKNODE_HTTPS_URL = process.env.HTTPS_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: QUICKNODE_HTTPS_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
