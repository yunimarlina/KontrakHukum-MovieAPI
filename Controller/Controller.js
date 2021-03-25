const {Movie,Booking} = require('../models/index.js')
 
class Controller{
 
  static async showAllMovies(req,res){
    try{
      let movies = await Movie.findAll()
      res.status(200).json({list: movies})

    }
    catch(error){
      console.log(error)
      res.status(400).json(error)
    }
  }

  static async showTopMovies(req,res){
    try{
      let movies = await Movie.findAll({order:[['rating', 'DESC']],limit: 10})
      res.status(200).json({top: movies})

    }
    catch(error){
      console.log(error)
      res.status(400).json(error)
    }
  }

  static async booking(req,res){
    const movieID = +req.params.id
    try{
      let data = await Movie.findOne({where: {id:movieID}})
      let detailBooking ={
        title: data.title,
        name: req.body.name,
        amount: req.body.amount,
        bookingDate: new Date()
        }
        const booking = await Booking.create(detailBooking)

      res.status(200).json({message: `Thank You ${booking.name} for booking movie ${booking.title}. Enjoy`})
    }
    catch(error){
      console.log(error)
      res.status(400).json(error)
    }

   
    
  }

}

module.exports = Controller