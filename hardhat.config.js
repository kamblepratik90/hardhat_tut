require('@nomiclabs/hardhat-waffle');
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
    }
  }
};