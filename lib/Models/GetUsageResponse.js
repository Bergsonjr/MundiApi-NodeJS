/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetUsageResponse
 */
class GetUsageResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.quantity = this.constructor.getValue(obj.quantity);
        this.description = this.constructor.getValue(obj.description);
        this.usedAt = this.constructor.getValue(obj.usedAt || obj.used_at);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.subscriptionItem =
          this.constructor.getValue(obj.subscriptionItem
     || obj.subscription_item);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'quantity', realName: 'quantity' },
            { name: 'description', realName: 'description' },
            { name: 'usedAt', realName: 'used_at', isDateTime: true, dateTimeValue: 'rfc3339' },
            {
                name: 'createdAt',
                realName: 'created_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            {
                name: 'subscriptionItem',
                realName: 'subscription_item',
                type: 'GetSubscriptionItemResponse',
            },
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

module.exports = GetUsageResponse;