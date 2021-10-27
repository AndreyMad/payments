const db = require("../db/paymentsDbContorller");
const bcrypt = require('bcrypt');
const saltRounds =12;
const getNotes = async (req, res) => {
  // req.headers.token
  const dbResponse = await db.getNotesFromDb();
  if (dbResponse.error) {
    return res.status(400).send({ error: "Something went wrong" });
  }
  return res.status(200).send(dbResponse);
};

const getUsers = async (req, res) => {
  // req.headers.token
  const dbResponse = await db.getUsersFromDb();
  if (dbResponse.error) {
    return res.status(400).send({ error: "Something went wrong" });
  }
  const modifResp = dbResponse.map(el=>{
     return{
      id:el.id,
      firstName:el.firstname,
      lastName: el.lastname,
      login:el.login,
      password:el.password,
      sessionToken: el.sessiontoken,
      isAdmin:el.isadmin
    }
  })
  return res.status(200).send(modifResp);
};


const createUser =async (req, res)=>{
 const isLogged=await db.checkSession(req.body.headers.token)
 if(!isLogged){return res.status(203).send({ error: "Not valid session" })}

//  bcrypt.hash(req.body.user.password, saltRounds, function(err, hash) {
//  console.log(hash)
// });
 req.body.user.password= bcrypt.hashSync(req.body.user.password, saltRounds)
 
  const userFromDb= await db.createUser(req.body.user)
    if (userFromDb.error) {
    return res.status(400).send({ error: "Something went wrong" });
  }
  const modifResp = {
    id:userFromDb.id,
    firstName:userFromDb.firstname,
    lastName: userFromDb.lastname,
    login:userFromDb.login,
    password:userFromDb.password,
    sessionToken: userFromDb.sessiontoken,
    isAdmin:userFromDb.isadmin
  }
   return res.status(201).send(modifResp);

}

const deleteUser =async(req,res)=>{
  const isLogged=await db.checkSession(req.body.headers.token)
  if(!isLogged){return res.status(203).send({ error: "Not valid session" })}
  const deletedUserId =await db.deleteUser(req.body.userId)
  if (deletedUserId.error) {
    return res.status(400).send({ error: deletedUserId.error });
  }
  return res.status(201).send(deletedUserId);
}

//auth
const authorization = async (req, res) => {
  const user = req.body.user;
  const userFromDB = await db.findUserFromDb(user.login.toLowerCase());
  if (!userFromDB) {
    return res
      .status(200)
      .send({ status: "ERROR", message: "Incorrect Login" });
  }
  const isPasswValid = bcrypt.compareSync(
    req.body.user.password,
    userFromDB.password
  );
  if (!isPasswValid) {
    return res
      .status(200)
      .send({ status: "ERROR", message: "Incorrect Password" });
  }

  const session = await createSession(userFromDB);
  if (session.status === "SUCCES") {
    return res.status(200).send({
      token: session.token,
      status: "SUCCES",
      user: {
        name: userFromDB.username,
        isAdmin: userFromDB.isadmin,
        email: userFromDB.email,
      },
    });
  }
};

const createSession = async (user) => {
  const token = jwt.sign(user.id, config.secret);
  const time = new Date();
  const tokenExpiredTime = time.setDate(time.getDate() + 30);
  const tokenWithExpiredTime = tokenExpiredTime + "." + token;
  const dbResp = await db.pushTokenToDb(user.email, tokenWithExpiredTime);
  return dbResp;
};

module.exports = { getNotes, getUsers,createUser, deleteUser };
