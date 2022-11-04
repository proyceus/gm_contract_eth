const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.getContractFactory("GM");
  const deployedContract = await contract.deploy();
  await deployedContract.deployed();

  console.log(
    `Contract link: https://goerli.etherscan.io/address/${deployedContract.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
