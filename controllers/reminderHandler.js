
//get reminders
const allReminders = (req, res)=>{

    res.status(201).json({success:true, data:"The list of reminders are as follows"});
}

//add reminders
const addReminders = (req, res)=>{
res.status(201).json({success:true, data:"User is looking to add reminders"})
}

//update reminders

const updateReminders = (req, res)=>{

    res.status(200).json({sucess:true, data:"User is trying to update the reminder"})
}

//delete a reminder or mark as complete
const deleteReminder = (req, res)=>{

    res.status(201).json({success:true, data:"User is trying to delete a reminder"})
}

module.exports ={
    allReminders, addReminders, updateReminders, deleteReminder
}