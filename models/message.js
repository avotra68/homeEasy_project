let connection = require('./../config/db')

class Message {

  static create(adresse_mail, motif_message, message , cb){
    // pas oublié le , après la fin de insert

    connection.query('INSERT INTO messages SET adresse_mail=?, motif_message=?, message=?, date_message=?', [adresse_mail, motif_message, message, new Date()], (error,result)=>{

      if (error) throw error
      cb(result);
    });
  }

 static messageAll(cb){
   connection.query('SELECT * FROM messages', (err, rows) =>{
     if(err) throw err
     cb(rows)
   })
 }


 static delete(id, cb){
   connection.query('Delete from messages where id=?', [id], (err,result)=>{
     if (err) throw console.error()
     cb(result)
   })
 }

 static select(id, cb){
   connection.query('SELECT * FROM messages where id=?', [id], (err,result)=>{
     if (err) throw console.error()
     cb(result)
   })
 }

 // static update(id,adresse_mail, motif_message, message, cb){
 //   connection.query('UPDATE messages set adresse_mail=?, motif_message=?, message=? where id=?', [adresse_mail, motif_message, message, id], (err,result)=>{
 //     if (err) throw console.error()
 //     cb(result)
 //   })
 // }


}


module.exports = Message
