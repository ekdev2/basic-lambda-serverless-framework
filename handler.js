"use strict";

const messages = [
  "Hello World!",
  "Hello Serverless!",
  "It's a great day today!",
  "Yay, I'm learning something new today!",
  "On cloud nine!",
  "Over the moon!",
  "Shooting for the stars!",
  "On top of the World!",
  "World at my feet!",
  "Doing everything I love!"
];

module.exports.basicLambdaFromEugene = async event => {
  let message = messages[Math.floor(Math.random() * 10)];

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message
      },
      null,
      2
    )
  };
};
