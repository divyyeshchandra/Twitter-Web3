const hre = require("hardhat");

async function main() {
  const TwiterContract = await hre.ethers.getContractFactory("TwiterContract");
  const twitercontract = await TwiterContract.deploy();
  console.log("ContractAddress:", twitercontract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

("0x74f8d51152a484BaB4bb20950BF7CD291886dd73");
