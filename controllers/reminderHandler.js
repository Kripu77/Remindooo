const {Reminders} = require("../models/Reminder");
const wrap = require('express-async-wrapper');

//get reminders
const allReminders = wrap(async (req, res) => {

    const allReminders = await Reminders.find({})

  if( allReminders.length == 0 ){
 res.status(404).json({ error:"No data found" });
  }
    else{
res.status(201).json({ success: true, data: allReminders });
    } 

});

//getSingleReminder
const getReminder = wrap(async (req, res) => {

  const data = await Reminders.findOne({_id:req.params.id});
  console.log(data)
  res.status(201).json({ success: true, data: data });
});


//add reminders
const addReminders = wrap(async (req, res) => {

    if(req.body){

    const reminderAdder = await Reminders.create(req.body);
    res.status(201).json({ success: true, data: reminderAdder });
    }

    else{
        res.status(400).json({
            error:"Please Supply required fields "
        })
    }

});

//update reminders

const updateReminders = wrap(async(req, res) => {
console.log(req.params)
  const data = await Reminders.findOneAndUpdate({_id:req.params.id}, req.body, {
    new:true, runValidators:true
  })
  res
    .status(200)
    .json({ sucess: true, data: data });
});

//delete a reminder or mark as complete
const deleteReminder = wrap(async(req, res) => {


  const data = await Reminders.findOneAndDelete({_id:req.params.id})
  res
    .status(201)
    .json({ success: true, data: data });
});

module.exports = {
  allReminders,
  addReminders,
  updateReminders,
  deleteReminder,
  getReminder,
};
