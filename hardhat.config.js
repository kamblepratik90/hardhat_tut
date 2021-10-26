require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-solhint");
require("@nomiclabs/hardhat-etherscan");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.0",
// };


// MUMBAI TEST NETWORK

module.exports = {
  solidity: "0.8.0",
  networks: {
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["ce25ea05a902ba501d04da1594f587bf8ec7a7154a38ae5d04d0ff5806eefe3f"]
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/W7xdeF1I5yzryiFdqL8ziMqGCZrRQrnQ",
      accounts: ["ce25ea05a902ba501d04da1594f587bf8ec7a7154a38ae5d04d0ff5806eefe3f"]
    },
  },
  etherscan: {
    apiKey: "W99AY3HJM13ATDE5IIJ8HFRCRBR56EU4S3",
  }
};