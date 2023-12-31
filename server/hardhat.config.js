require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { INFURA_LINK, PRIVATE_KEY } = process.env;

console.log(INFURA_LINK);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: INFURA_LINK,
      accounts: [PRIVATE_KEY],
    },
  },
};
