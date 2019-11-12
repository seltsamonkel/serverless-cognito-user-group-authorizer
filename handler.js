module.exports.hello = async (event, context) => {
  const {identity} = event.requestContext
    return {
      isBase64Encoded: false,
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({identity}),
    };
};