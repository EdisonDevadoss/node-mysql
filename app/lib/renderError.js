function renderError(reply, errObj) {
  console.log('errObj is', errObj);
  if (errObj.name === 'RecordNotFoundError') {
    reply.code(404).send({ errors: [errObj.message] });
  }
  else if (errObj.name === 'ValidationError') {
    reply.code(422).send({ errors: errObj.record.readableErrors() });
  }
  else {
    reply
      .code(500)
      .send({ errors: ['Sorry, something went wrong on our end. Please try again later'] });
  }
}
module.exports = renderError;
