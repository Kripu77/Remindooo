const {Reminders} = require("../models/Reminder")

//get reminders
const allReminders = async (req, res) => {

    const allReminders = await Reminders.find({})

  if( allReminders == []){
 res.status(404).json({ error:"No data found" });
  }
    else{
res.status(201).json({ success: true, data: allReminders });
    } 

};

//getSingleReminder
const getReminder = (req, res) => {
  res.status(201).json({ success: true, data: "The single reminder" });
};


//add reminders
const addReminders = async (req, res) => {

    if(req.body){

    const reminderAdder = await Reminders.create(req.body);
    res.status(201).json({ success: true, data: reminderAdder });
    }

    else{
        res.status(400).json({
            error:"Please Supply required fields "
        })
    }

};

//update reminders

const updateReminders = (req, res) => {
  res
    .status(200)
    .json({ sucess: true, data: "User is trying to update the reminder" });
};

//delete a reminder or mark as complete
const deleteReminder = (req, res) => {
  res
    .status(201)
    .json({ success: true, data: "User is trying to delete a reminder" });
};

module.exports = {
  allReminders,
  addReminders,
  updateReminders,
  deleteReminder,
  getReminder,
};
