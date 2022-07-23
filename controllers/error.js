//catch all routes
const catchAll=(req, res)=>{

    res.status(404).json({error:"The information that you are looking to access is not available"})
}

module.exports={
    catchAll
}