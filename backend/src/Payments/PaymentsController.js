const db = require("../db/paymentsDbContorller");

const getNotes = async (req, res) => {
  // req.headers.token
  const dbResponse = await db.getNotesFromDb();
  if (dbResponse.error) {
    return res.status(502).send({ error: "Something went wrong" });
  }
  return res.status(200).send(dbResponse);
};

const getUsers = async (req, res) => {
  // req.headers.token
  const dbResponse = await db.getUsersFromDb();
  if (dbResponse.error) {
    return res.status(502).send({ error: "Something went wrong" });
  }
  const modifResp = dbResponse.map(el=>{
    console.log(el)
  })
  return res.status(200).send(dbResponse);
};

const createUser =async (req, res)=>{
 const isLogged=await db.checkSession(req.body.headers.token)
 if(!isLogged){return res.status(200).send({ error: "Not valid session" })}
  const newUser= await db.createUser(req.body.user)
 console.log(req.body.user)

}


module.exports = { getNotes, getUsers,createUser };
