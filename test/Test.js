const {expect} = require("chai");

describe("Ethereum Token",function()
{
    it("Balances",async function()
    {
        const [owner]=await ethers.getSigners();
        let Token=await ethers.getContractFactory("Token");
        let hardhatToken=await Token.deploy();
        let ownerbalance=await hardhatToken.balance(owner.address);
        console.log(ownerbalance);
    })
    it("Transaction",async function()
    {
        const [owner,addr1,addr2]=await ethers.getSigners();
        let Token=await ethers.getContractFactory("Token");
        let hardhatToken=await Token.deploy();
        await hardhatToken.transfer(addr1.address,20)
        let addr1balance=await hardhatToken.balance(addr1.address)
        console.log(addr1balance);
        await hardhatToken.connect(addr1).transfer(addr2.address,10);
        let addr2balance=await hardhatToken.balance(addr2.address)
       
        console.log(addr2balance);
    })
  

});