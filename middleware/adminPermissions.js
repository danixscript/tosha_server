



const permissions = async (req, res, next) => {
    try {
        if(req.body.permissions == 1){
            next()
        }else {
            let errobj = {
                type:'bad',
                msg:"you do not have a permissions to do this"
            }
            res.json({
              err: errobj
            });
          }
    
    } catch (e) {
      let errobj = {
        type:'bad',
        msg:"you do not have a permissions to do this "
    }
    res.json({
      err: errobj + e
    });
  } 
};

module.exports.permissions = permissions;
