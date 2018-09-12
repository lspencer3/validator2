/*const inquirer = require('inquirer');
const mongoose = require('mongoose');
const crypto = require('crypto');


mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/BPCodeChallenge');

const db = mongoose.connection;

db.on('error', function(err){
  console.log(err)
});

db.once('open',function(){
  console.log('successfully connected to mongodb')
});

//schema for db
var Schema = mongoose.Schema;

var UserPwSchema = new Schema({

  pw: { type: String,
    required: true
  },

  pubk: { type: String,
    required:false
  }
});

// This creates our model from the above schema, using mongoose's model method
const UserPws = mongoose.model("UserPws", UserPwSchema);


//function to secure pw in mongo database through hash
const hash = crypto.createHash('sha256');

function hasher(input){
  hash.update(input);
  return hash.digest('hex')
}


//create function to acquire password

function Q1(){
  inquirer.prompt([
  {
    message: "Please Enter a Password",
    name: 'pw',
    type: 'input'
  }
  ]).then(function(res){
      console.log(res.pw)

      //securing user pw
      let securepw = hasher(res.pw)
      console.log('\nvariable ' + securepw+'\n')

      //storing new record to db securely if one exist this updates the existing record
      UserPws.create({pw:securepw}).then((res) => {
        console.log('\npw inserted\n');
        genKeys(securepw) 
       }).catch((err) => {console.log(err)})
    })
};

// generate public key/private key for user
function genKeys(pw){
  UserPws.findOne({pw:pw}).then((res) => {
    //console.log(res)
    let id = res._id
    console.log('user authenticated....generating keys\n')
    const prime_length = 60;
    const diffHell = crypto.createDiffieHellman(prime_length);

    diffHell.generateKeys('hex');

    let publk = diffHell.getPublicKey('hex')
    //let privk = diffHell.getPrivateKey('hex')
    let privk = diffHell.getPrivateKey('hex')

    let privateKey = '-----BEGIN PRIVATE KEY-----\n' +
           '\n'+ privk  +
    '\n-----END PRIVATE KEY-----\n';
    //console.log('private key = ' + privk + '\n\npublic key =  ' + publk)

    UserPws.findOneAndUpdate({_id:id},{pubk:publk},{upsert:true, new:true}).then(function(res){
      console.log('\npublic key stored')
      console.log(res)

      let returnedpubky = res.pubk
      sendMessage(id,returnedpubky,privateKey)
    }).catch((err)=>{console.log(err)})
  }).catch((err) => { console.log(err)})
};



const signer = crypto.createSign('SHA256');
const verifier = crypto.createVerify('SHA256')

//function to encrypt messages with private key signing 
function sendMessage(id,pb,prv){
  inquirer.prompt([
  {
    message:"Sign Message with Private Key",
    type:'confirm',
    name:'answer',
    default: true
  }, 
  {  
    message:"please enter your message",
    type:'input',
    name:'message',
  }
  ]).then(function(res){
      console.log(res)
      let returnedpky = prv
      let message = res.message
      //let returnedpubky;

      if (res.answer === true){

        UserPws.findOne({_id:id}).then((res) => {
          console.log(res)

          let returnedpubky = res.pubk

          console.log(message)

          signer.update(message);

          console.log(returnedpky)

          const signature = (signer.sign(returnedpky));

          const signature_hex = signature.toString('hex')

          //console.log(returnedpubky)
          // validateSig()
        })
      }
      else{
        console.log('did not meet condition')
      }
    }).catch((err)=>{console.log(err)})
};

 //function to validate signature

 function validateSig(message){
  const signature = message
  console.log(verifier.verify(returnedpubky, signature));
 };



//starts the prompt
Q1();*/




