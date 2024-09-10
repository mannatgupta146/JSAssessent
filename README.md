

# NFT Minting Project

This project is a JavaScript-based NFT minting system that allows you to create, list, and manage non-fungible tokens (NFTs) representing IPL teams. The project includes functions for minting NFTs, listing all minted NFTs, and getting the total supply of NFTs.

## Features

- **Mint NFTs**: Create NFTs with specific metadata like name, color, captain, trophies, and rank.
- **List NFTs**: Display all minted NFTs along with their metadata.
- **Get Total Supply**: Retrieve the total number of NFTs minted.

## Video Tutorial

For a detailed walkthrough of the code and how the project works, check out the [Loom video](https://www.loom.com/share/0f79a646168e4416834896675ea2e3d4?sid=cd113114-da2d-4d9d-baaa-4209012e413a).

## How It Works

The project is structured around three core functions:

1. **mintNFT(name, color, captain, trophies, rank):** 
   - Creates an NFT object with metadata passed as parameters.
   - Stores the NFT in the `NFTContainer` array.

2. **listNFTs():**
   - Loops through the `NFTContainer` array and prints each NFT's metadata to the console.

3. **getTotalSupply():**
   - Prints the total number of NFTs minted.

## Code

Below is the complete JavaScript code for the NFT Minting Project:

```javascript
// Create a variable to hold your NFTs
let NFTContainer = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, color, captain, trophies, rank) {
    let NFT = {
        name: name,
        color: color,
        captain: captain,
        trophies: trophies,
        rank: rank,
    };
    NFTContainer.push(NFT);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let x = 0; x < NFTContainer.length; x++) {
        console.log("\n IPL Teams Scorecard \n");
        console.log("Name: " + NFTContainer[x].name);
        console.log("Color: " + NFTContainer[x].color);
        console.log("Captain: " + NFTContainer[x].captain);
        console.log("Trophies: " + NFTContainer[x].trophies);
        console.log("Rank: " + NFTContainer[x].rank);
        console.log("\n------------------\n");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFT minted: " + NFTContainer.length);
}

// Example usage
mintNFT("Chennai Super Kings", "Yellow", "Mahendra Singh Dhoni", 5, 1);
mintNFT("Mumbai Indians", "Blue", "Rohit Sharma", 5, 2);
mintNFT("Kolkata Knight Riders", "Purple", "Gautam Gambhir", 3, 3);
mintNFT("Rajasthan Royals", "Pink", "Sanju Samson", 1, 4);
mintNFT("Sunrisers Hyderabad", "Orange", "Shikhar Dhawan", 1, 5);
mintNFT("Royal Challengers Bangalore", "Red", "Virat Kohli", 0, 6);

listNFTs();
getTotalSupply();


### Contributing
Contributions are welcome! If you have ideas for improvements or new features, feel free to fork the repository and submit a pull request. Let's make this project even better together!

### Thank You
Thank you for checking out this project! If you found it helpful or interesting, please consider giving it a star on GitHub. Your support is greatly appreciated!
