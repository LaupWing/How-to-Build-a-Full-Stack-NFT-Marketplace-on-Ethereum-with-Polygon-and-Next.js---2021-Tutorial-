require("@nomiclabs/hardhat-waffle");

module.exports = {
   solidity: "0.8.4",
   networks:{
      hardhat:{
         chainId: 1337
      },
      mumbai:{
         url: ``,
         accounts: []
      },
      mainnet: {
         url: ``,
         accounts: []
      }
   }
};
