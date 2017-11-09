/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateVoucherPaymentRequest
 */
class CreateVoucherPaymentRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.capture = this.constructor.getValue(obj.capture);
        this.statementDescriptor =
          this.constructor.getValue(obj.statementDescriptor
     || obj.statement_descriptor);
        this.cardId = this.constructor.getValue(obj.cardId || obj.card_id);
        this.cardToken = this.constructor.getValue(obj.cardToken || obj.card_token);
        this.card = this.constructor.getValue(obj.card || obj.Card);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'capture', realName: 'capture' },
            { name: 'statementDescriptor', realName: 'statement_descriptor' },
            { name: 'cardId', realName: 'card_id' },
            { name: 'cardToken', realName: 'card_token' },
            { name: 'card', realName: 'Card', type: 'CreateCardRequest' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = CreateVoucherPaymentRequest;