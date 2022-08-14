const express = require('express');
const reminder = express.Router();
const {allReminders, addReminders, updateReminders, deleteReminder, getReminder} = require('../controllers/reminderHandler')

//get route to handle all reminders
reminder.get("/", allReminders);

//get single reminder
reminder.get("/:id", getReminder);

//post route to add more reminders;
reminder.post("/", addReminders)

//update route to update existing reminders;
reminder.patch("/:id", updateReminders)

//delete route to delete or mark complete any reminder
reminder.delete("/:id", deleteReminder)


module.exports ={
    reminder
}

