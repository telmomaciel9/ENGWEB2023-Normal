var plantas = require("../models/plantas");

module.exports.list = () => {
    return plantas
        .find()
        .then((resposta) => {
            return resposta;
        })
        .catch((erro) => {
            return erro;
        });
};

module.exports.getEspecieX = (especie) => {
    return plantas
        .find({ Espécie: especie })
        .then((resposta) => {
            return resposta;
        })
        .catch((erro) => {
            return erro;
        });
};

module.exports.getImplantacaoX = (imp) => {
    return plantas
        .find({ Implantação: imp })
        .then((resposta) => {
            return resposta;
        })
        .catch((erro) => {
            return erro;
        });
};

module.exports.getLista = (id) => {
    return plantas
        .findOne({ _id: id })
        .then((resposta) => {
            return resposta;
        })
        .catch((erro) => {
            return erro;
        });
};

module.exports.freguesias = () => {
    return plantas
        .distinct("Freguesia")
        .sort()
        .then((resposta) => {
            return resposta;
        })
        .catch((erro) => {
            return erro;
        });
};

module.exports.especies = () => {
    return plantas
        .distinct("Espécie")
        .sort()
        .then((resposta) => {
            return resposta;
        })
        .catch((erro) => {
            return erro;
        });
};

module.exports.addPlanta = (t) => {
    return plantas
        .create(t)
        .then((dados) => {
            return dados;
        })
        .catch((erro) => {
            return erro;
        });
};

module.exports.deletePlanta = (id) => {
    return plantas
        .deleteOne({ _id: id })
        .then((dados) => {
            return dados;
        })
        .catch((erro) => {
            return erro;
        });
};
