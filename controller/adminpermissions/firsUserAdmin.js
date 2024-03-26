const admin = require("../../models/sql/admin");
const authbcrypt = require("../../auth/bcrypt");


   
// this is logg in functionn
const firsUserAdmin = async (req, res, next) => {
    try {
        let getAllUsers = await admin.selectAllEmployees();

        if (getAllUsers[0].length > 0) {
            res.json({msg:'you have admin users',isFirsUser:false})
        } else {
            const date = new Date();
            let name = 'admin';
            let phone = '0000';
            let permissions = 1;
            let password = 'admin123'
            let hash = await authbcrypt.hashPassport(password);
            await admin.insertNewEmployee(
                name,
                hash, date, phone, permissions

            )

            res.json({
                firsuserAdmin: 'admin',
                firsUserPassword:'admin123',
                isFirsUser:true
            })
        }

        return;


    } catch (e) {
        console.log("i am the master ", e.message);
        // req.session.err = e.details.map((item) => item.message);
        res.json({
            err: e.message
        });
    }
}


module.exports.firsUserAdmin = firsUserAdmin;