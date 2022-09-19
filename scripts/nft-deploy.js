const { ethers } = require('hardhat');
async function main() {
  const contract = await ethers.getContractFactory('NFT');
  const nft = await contract.deploy();
  await nft.deployed();
  console.log('NFT deployed to:', nft.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
