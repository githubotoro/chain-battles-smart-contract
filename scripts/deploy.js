const hre = require("hardhat");

async function main() {
	const ChainBattlesContractFactory = await hre.ethers.getContractFactory(
		"ChainBattles"
	);
	const ChainBattles = await ChainBattlesContractFactory.deploy();

	await ChainBattles.deployed();

	console.log(`Contract deployed to: ${ChainBattles.address}`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
