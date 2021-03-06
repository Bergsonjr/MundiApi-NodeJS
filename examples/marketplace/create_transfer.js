const mundipagg = require('mundipagg-nodejs');

mundipagg.Configuration.basicAuthUserName = 'YOUR SECRET KEY';

const recipientsController = mundipagg.RecipientsController;

const request = new mundipagg.CreateTransferRequest();
request.amount = 100;

recipientsController
    .createTransfer('rp_RElaP4NMCJu08V9m', request)
    .then(transfer => {
        console.log(`Transfer Id: ${transfer.id}`);
        console.log(`Transfer status: ${transfer.status}`);
    })
    .catch(error => {
        console.log(`Status Code: ${error.errorCode}`);
        if (error.errorResponse instanceof mundipagg.ErrorException) {
            console.log(error.errorResponse.message);
            console.log(error.errorResponse.errors);
        } else {
            throw error;
        }
    });
