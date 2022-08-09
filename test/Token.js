const { expect } = require("chai");



describe("Hydra Richie Token Contract", function () {

    it("The Balance of Owner should be Equal to Total supply", async function () {
      const [owner]=await ethers.getSigners() //must use square braces for getting the address of owner who deploeyed the contarct 
        const Instance=await ethers.getContractFactory("Token");
        const Hrt=await Instance.deploy();
        await Hrt.deployed();
        console.log(owner)
        const blnce=await Hrt.totalsupply();
        console.log("Total Supply is:",blnce);
        const ownerbalance=await Hrt.balanceOf(owner.address);
        expect(blnce).to.equal(ownerbalance);

    })
    it("Transaction Succesfull", async function () {
        const [owner,person1,person2]=await ethers.getSigners() //must use square braces for getting the address of owner who deploeyed the contarct 
          const Instance=await ethers.getContractFactory("Token");
          const Hrt=await Instance.deploy();
          await Hrt.deployed();
          console.log("owner address=",owner.address)
          console.log("First Person address=",person1.address);
          console.log("Second Person address=",person2.address);
          await Hrt.connect(owner).transfer(person1.address,10);
          const balance=await Hrt.balanceOf(owner.address)
          const balance1=await Hrt.balanceOf(person1.address)
          expect(balance1).to.equal(10)
          expect(balance).to.equal(990)
          await Hrt.connect(person1).transfer(person2.address,5)
     
          const balance2=await Hrt.balanceOf(person2.address)
          expect(balance2).to.equal(5)

          console.log("owner address balance=",balance)
          console.log("First Person address balance=",balance1);
          console.log("Second Person address balance=",balance2);

          
      })
})