const home = (req, res)=>{
res.status(200).json({success:true, data:"Welcome to Remindoo, the next Gen AI powered Reminder platform. Stay Tuned for further updates"})
}

module.exports = {
    home
}