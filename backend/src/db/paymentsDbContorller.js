const { queryHandler } = require("./index");


const getNotesFromDb = () => {
    return queryHandler(
      `SELECT * FROM autonompayments `
    ).then((res) => {
      return res.rows;
    }).catch(err=>{
        return  {error:err}} )
  };


  module.exports ={getNotesFromDb}