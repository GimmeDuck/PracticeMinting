const nftName = "Gimme_Duck";
const description = "Gimme_Duck, Minting Practice";
const ImgUrl = "ipfs://QmcFkm2FYWboEdaiRNWP8WsZAg7hiRrrcyRwp6iYHa1n56";
const totalNum = 1;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${ImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}