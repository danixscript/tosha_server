const hapijoiCreate = require("../../auth/joi");
const authbcrypt = require("../../auth/bcrypt");
const products = require("../../models/sql/sqlpools");
const mysql2 = require("../../models/sql/sqlBuy");

const jwt = require("../../auth/jwt");
const localStorage = require("localStorage");


const pay = async (req, res, next) => {
    try {
        let yourDate = new Date()
      let date =  yourDate.toISOString().split('T')[0]


        let getOrder = await products.getMyOrderByOrderId(req.body.id);

        if (getOrder[0].length > 0) {

            let ispaid = 'yes'

            let updateItem = await products.updateOrderPay(
                ispaid,  date, req.body.id

            );

            if (updateItem) {

                let getAllMyOrders = await mysql2.selectProdufctsOrderJoinById(req.body.id);
                

                res.json({
                    data: getAllMyOrders[0]
                });
            }
        } else {
            res.json({
                msg: 'cannot find this store'
            })
        }



    } catch (e) {
        console.log("::::", e)
        res.json({
            err: "error unvalid prop" + e,
            e,
            error: e
        }).status(500);
    }
};

module.exports.pay = pay;