const express=require('express')
const app = express()



const t =  new Date();
const h=t.getHours();
if (h>8&&h<17) {
console.log("your application is available")
console.log(h)

app.use(express.static('public'));
}
else
	{
		app.get('',(req,res)=>{
			
		res.sendFile(__dirname+'/public/error.html');

		});
		console.log("Timeout")
	}

app.listen(3000,err=>{
    if(err) console.log("server is not running")
    else console.log("server is running on port 3000")
})

