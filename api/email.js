var config = require('../config/config');
var nodemailer = require('nodemailer'); // send mail module

module.exports = {
	sendMailCreateService: function(service){

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
	    html: "Hola "+service.client+", <br /><br />Se ha creado un nuevo servicio, tu petición será revisada por uno de nuestros agentes en breve. <br /><br /> Es necesario que realice el pago del servicio, para esto debe realizar una transferencia bancaria a la cuenta de ahorros: 12-3456644-2 de Bancolombia, una vez realice la tranferencia envie el comprabante de pago via mail a info@vidalegal.co o envíar via Whatsapp al numero: 57 3057750307, una vez se verifique su pago su solicitud será atendida de manera oportuna por nuestros agentes. <br /><br /><br /> Para saber en que estado está tu solicitud ingresa a <a href='www.vidalegal.co'>www.vidalegal.co</a> e ingresa el código: <strong>"+service.code+"</strong> <br /><br /><br /><br /> Equipo Vida Legal <br /><a href='www.vidalegal.co'>www.vidalegal.co</a>"
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

	},

	sendMailStart: function(service){

		var smtpTransport = nodemailer.createTransport("SMTP",{
		    service: "Gmail",
		    auth: {
		      user: config.send.from,
		      pass: config.send.pwd
		    }
		});

	  var mail = {
	    from: "Start Process <"+config.send.email+">",
	    to: service.email +", manu8083el@gmail.com, danielr50@hotmail.com, info@vidalegal.co",
	    subject: "Start Process in www.vidalegal.co",
	    text: "Start Process in www.vidalegal.co",
	    html: "Hola "+service.client+", <br /><br />Su pago ha sido verificado correctamente, su solicitud está siendo procesada por nuestros agentes, pronto nos pondremos en contacto con usted para darle mas detalles. <br /><br /> Para saber en que estado está tu solicitud ingresa a <a href='www.vidalegal.co'>www.vidalegal.co</a> e ingresa el código: <strong>"+service.code+"</strong> <br /><br /><br /><br /> Equipo Vida Legal <br /><a href='www.vidalegal.co'>www.vidalegal.co</a>"
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

	},


	sendMailComplete: function(service){

		var smtpTransport = nodemailer.createTransport("SMTP",{
		    service: "Gmail",
		    auth: {
		      user: config.send.from,
		      pass: config.send.pwd
		    }
		});

	  var mail = {
	    from: "Completed Service <"+config.send.email+">",
	    to: service.email +", manu8083el@gmail.com, danielr50@hotmail.com, info@vidalegal.co",
	    subject: "Completed Service in www.vidalegal.co",
	    text: "Completed Service in www.vidalegal.co",
	    html: "Hola "+service.client+", <br /><br />Queremos informarle que su solicitud fue completada correctamente. <br /><br /> Ha sido un gusto poder ayudarle en su proceso, recuerde que juntos podemos derrotar la corrupción. <br /><br /><br /><br /> Equipo Vida Legal <br /><a href='www.vidalegal.co'>www.vidalegal.co</a>"
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

	},


	sendMailCancel: function(service){

		var smtpTransport = nodemailer.createTransport("SMTP",{
		    service: "Gmail",
		    auth: {
		      user: config.send.from,
		      pass: config.send.pwd
		    }
		});

	  var mail = {
	    from: "Canceled Service <"+config.send.email+">",
	    to: service.email +", manu8083el@gmail.com, danielr50@hotmail.com, info@vidalegal.co",
	    subject: "Canceled Service in www.vidalegal.co",
	    text: "Canceled Service in www.vidalegal.co",
	    html: "Hola "+service.client+", <br /><br />Queremos informarle que su solicitud ha sido cancelada, esto se debe a que no presentó las pruebas suficientes o su caso no está siendo objeto de corrupción. <br /><br /> Ha sido un gusto poder ayudarle en su proceso, recuerde que juntos podemos derrotar la corrupción. <br /><br /><br /><br /> Equipo Vida Legal <br /><a href='www.vidalegal.co'>www.vidalegal.co</a>"
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
