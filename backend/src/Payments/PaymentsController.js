const db = require('../db/paymentsDbContorller')

const getNotes = async (req,res)=>{
    const dbResponse = await db.getNotesFromDb()
    if(dbResponse.error){
      return  res.status(502).send({error:'Something went wrong'})
    }
   return res.status(200).send(dbResponse)
}


module.exports={getNotes}