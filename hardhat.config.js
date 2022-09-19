require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: process.env.ACHEMICAL_RPC_URL,
      accounts: [`0x${process.env.RINKBY_PRIVATE_KEY}`],
    },
  },
};
