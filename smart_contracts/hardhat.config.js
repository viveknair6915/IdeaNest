require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/t46dY550gpRsY95fqH6e9RU5yiuwKrQf',
      accounts: ['068129d08dc1546e34b0f698913b856e0c0bf0b9db19d00c9bc6af24b994c3a6'],
    },
  },
};