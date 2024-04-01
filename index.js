require("dotenv").config();

const config = require("./config");
const apiCreator = require('@iobxt/api-creator');
const dbResource = require('@iobxt/db-resource');
const path = require('path');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apiPath = path.resolve('./api/');

const db = dbResource(
  {
    uri: config.db.connectionString,
  },
  [
    {
      name: "users",
      schema: {
        username: String,
      },
    },
    {
      name: "WineLists",
      schema: new Schema({
        userId: {
          type: String
        },
        wineList: [
          {
            id: {
              type: String
            },
            name: {
              type: String
            },
            sub: {
              type: String
            },
            notes: {
              type: String
            },
            tags: {
              country: {
                type: String
              },
              grape: {
                type: String
              },
              type: {
                type: String
              },
              region: {
                type: String
              }
            },
            rating: {
              type: String
            },
            description: {
              type: String
            }
          }
        ]
      })
    }
  ]
);

apiCreator.init(apiPath, config, {db});