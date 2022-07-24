const mongoose = require('mongoose');


//reminder schema
const ReminderSchema = new mongoose.Schema({

    header:{
        type:String, 
        required:true, 
        
    },description:{
        type:String, 
        required:true
    }, 
    dateAdded:{
        type:Date, 
        required:true
    }, 
    dateDue:{
        type:Date, 
        required:true
    }, 
    pending:{
        type: Boolean
    }

    

})


//model for reminders
const Reminders = mongoose.model("Reminder", ReminderSchema);


module.exports={
    Reminders
}

