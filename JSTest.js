/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer=[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,color,captain,trophies,rank) {
    let NFT={
        name:name,
        color:color,
        captain:captain,
        trophies:trophies,
        rank:rank
    }
NFTContainer.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let x=0;x<NFTContainer.length;x++){
        console.log("\n IPL Teams Scorecard \n");
        console.log("Name: "+ NFTContainer[x].name);
        console.log("Color: "+ NFTContainer[x].color);
        console.log("Captain: "+ NFTContainer[x].captain);
        console.log("Trophies: "+ NFTContainer[x].trophies);
        console.log("Rank: "+ NFTContainer[x].rank);
        console.log("\n------------------\n")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("Total NFT minted: "+ NFTContainer.length);
}

// call your functions below this line
mintNFT("Chennai Super Kings","Yellow","Mahendra Singh Dhoni",5,1);
mintNFT("Mumbai Indians","Blue","Rohit Sharma",5,2);
mintNFT("Kolkata Knight Riders","Purple","GautamGambhr",3,3);
mintNFT("Rajasthan Royals","Pink","Sanju Samson",1,4);
mintNFT("Sunrises Hyderabad","Orange","Shikhar Dawan",1,5);
mintNFT("Royal Challenger Banglore","Red","Virat Kohli",0,6);

listNFTs();
getTotalSupply();
