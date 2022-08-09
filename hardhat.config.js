/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle")
const API_KEY="oV4XlJ8Mq0gFBrIYtZlyoEkMBx3s_vej";
const Ropsten_key="fd144523a4ec2563b4543d85a6178653a5440ce4060f6f85181a4563d87e9751"
module.exports = {
  solidity: "0.7.5",
  network :{
    ropsten:{
      url:"https://eth-ropsten.alchemyapi.io/v2/oV4XlJ8Mq0gFBrIYtZlyoEkMBx3s_vej",
      accounts:["fd144523a4ec2563b4543d85a6178653a5440ce4060f6f85181a4563d87e9751"]
    }
  }
};
