const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  
  try {
    const upload = await Upload.deploy();
    // console.log(upload);
    await upload.deploymentTransaction();
    const address = await upload.getAddress();
    
    console.log("Library deployed to:", address);
  } catch (error) {
    console.error("Error deploying contract:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});