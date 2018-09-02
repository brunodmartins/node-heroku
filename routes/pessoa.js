const pessoas = []
function save(req, res) {
    pessoas.push(req.body);
    res.send({"msg": req.body.nome + " cadastrado", "status": 200});
}

function list(req, res) {
    res.send({"pessoas": pessoas})
}


module.exports = {
    list, save
}

