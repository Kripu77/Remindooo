const express = require('express');
const reminder = express.Router();
const {allReminders, addReminders, updateReminders, deleteReminder} = require('../controllers/reminderHandler')

//get route to handle all reminders
reminder.get("/", allReminders);

//post route to add more reminders;
reminder.post("/", addReminders)

//update route to update existing reminders;
reminder.put("/:id", updateReminders)

//delete route to delete or mark complete any reminder
reminder.delete("/:id", deleteReminder)


module.exports ={
    reminder
}

