/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle")
module.exports = {
  solidity: "0.7.5",
  network :{
    ropsten:{
      url:"Alchemy /Infura API",
      accounts:["Private Key"]
    }
  }
};
