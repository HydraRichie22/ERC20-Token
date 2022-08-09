
pragma solidity >= 0.5.0 < 0.9.0;
import "hardhat/console.sol";
contract Token 
{
string public name="Ethereum Token";
string public symbol="ETH";
uint public totalsupply=10000;
address public owner;
mapping(address=>uint) balances;
constructor()
{
    balances[msg.sender]=totalsupply;
    owner=msg.sender;

}

function transfer(address receiver,uint amount)external
{
    console.log("the receiver is %s",receiver);
    console.log("balance of owner is %s",balances[msg.sender]);
    console.log("amount=",amount);
    require(balances[msg.sender]>=amount);
    balances[receiver]=balances[receiver]-amount;
      balances[msg.sender]=balances[msg.sender]-amount;
}
function balance(address account)view external returns(uint)
{
return balances[account];
}
}