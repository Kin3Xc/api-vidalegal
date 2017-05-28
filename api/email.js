var config = require('../config/config');
var nodemailer = require('nodemailer'); // send mail module

module.exports = {
	sendMailCreateService: function(service,link){

		var smtpTransport = nodemailer.createTransport("SMTP",{
		    service: "Gmail",
		    auth: {
		      user: config.send.from,
		      pass: config.send.pwd
		    }
		});

	  var mail = {
	    from: "Create a new request <"+config.send.email+">",
	    to: service.email +", manu8083el@gmail.com, danielr50@hotmail.com, info@vidalegal.co",
	    subject: "Request a new service",
	    text: "Request a new service",
	    html: "Hi "+service.client+", <br /><br />Se ha creado un nuevo servicio, tu petición será revisada por uno de nuestros agentes en breve. <br /><br /> Para saber en que estado está tu solicitud ingresa a <a href='www.vidalegal.co/status'>www.vidalegal.co/status</a> e ingresa el código: <strong>"+service.code+"</strong> <br /><br /><br /><br /> Equipo Vida Legal <br /><a href='www.vidalegal.co'>www.vidalegal.co</a>"
	  }

	  smtpTransport.sendMail(mail, function(error, response){
	    if(error){
	        var retro = {err:error,message:"Message no send!"};
	    }else{
	        var retro = {err:false,data:response.message};
	    }
	    smtpTransport.close();
	    return retro;
	  });

	}
};
