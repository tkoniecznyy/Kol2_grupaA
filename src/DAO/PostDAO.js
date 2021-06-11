'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import * as _ from "lodash";

const postSchema = new mongoose.Schema({
  title: {type: String},
  url: {type: String},
  content: {type: String},
}, {
  collection: 'post'
});
postSchema.plugin(uniqueValidator);
