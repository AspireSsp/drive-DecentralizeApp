require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/fb-BloGbCP2oNfQsf-60yOC0cIlX-0ur",
      chainId: 11155111,
    }
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};