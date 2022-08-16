module.exports = reqModi = (req,resp,next)=>{                //here,reqModi fn is middleWare fn,taking 3 param- req,res,next
    if(!req.query.age)                                       //here,only we write logic to check authentications n others........
    {
       resp.send("please enter your age")
    }  
    else if(req.query.age < 18){
        resp.send("you cant access the page")
    }
    else{
       next();                                               //next fn let us use other routes below it 
    }
 }
