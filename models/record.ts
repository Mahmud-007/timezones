import mongoose, { model, models } from "mongoose";

let recordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});
const Record = models.Record || model("Record", recordSchema);
export default Record;
