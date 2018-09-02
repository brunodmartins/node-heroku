const mongo = require("../mongo")
const pessoas = []
function save(req, res) {
    const db = mongo.getDb();
    db.collection("pessoa").insertOne(req.body, function(err,r) {
        if (err != null) {
            res.send(err);
        } else {
            res.send({"msg": req.body.nome + " cadastrado", "status": 200});        
        }
    });
}

function list(req, res) {
    const db = mongo.getDb();
    db.collection("pessoa").find({}).toArray(function(err,docs) {
        if (err != null) {
            res.send(err);
        } else {
            res.send({"pessoas": docs});        
        }
    });
}


module.exports = {
    list, save
}

