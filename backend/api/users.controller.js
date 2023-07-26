import UserDAO from "../dao/userDAO.js";

export default class UserCtrl {
    static async UserPutAPI(req, res,_) {
        let cursor = await UserDAO.signup({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            broker_id: req.body.broker_id,
            email: req.body.email,
            mobile: req.body.mobile,
            username: req.body.username,
            password: req.body.password,
            transactions: [],
            presentstocks: [],
            
        })
        res.json(cursor)
    }

    static async UserGetAPI(req,res,_){
        let cursor
        switch (req.query.type) {
            case "Login":
                cursor = await UserDAO.login({
                    email : req.query.details[3],
                    password : req.query.details[6]
                })
                break;
            default:
                cursor = {status : "Mention The Request Type"}
                break;
        }

        res.json(cursor)
    }
}