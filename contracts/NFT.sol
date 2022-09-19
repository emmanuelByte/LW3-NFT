// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract NFT is ERC721 {
    constructor() ERC721("Tera NFT", "Tera") {
        // Mint 5 nft
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }

    // function mint(address to, uint256 tokenId) public {
    //     _safeMint(to, tokenId);
    // }
}
