import mongoose from "mongoose";
import { Schema } from 'mongoose';

const QuestionSchema = Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    options: [{type: mongoose.Schema.Types.ObjectId, ref: 'Option' }]
});

export const QuestionModel = mongoose.model('Question',QuestionSchema)