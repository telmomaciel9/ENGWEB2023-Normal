var express = require("express");
var router = express.Router();
var plantas = require("../controllers/plantas");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

//GET /plantas: devolve uma lista com todos os registos;
//GET /plantas?especie=EEEE: devolve a lista dos registos correspondentes à espécie EEEE;
//GET /plantas?implant=AAA: devolve a lista dos registos com implantação AAA;
router.get("/plantas", function (req, res, next) {
    var especie = req.query.especie;
    var implant = req.query.implant;

    if (especie != null && implant == null) {
        plantas
            .getEspecieX(especie)
            .then((plantas) => {
                res.jsonp(plantas);
            })
            .catch((erro) => {
                res.render("error", {
                    error: erro,
                    message:
                        "Erro na obtenção dos resgistos da planta desta espécie",
                });
            });
    } else if (especie == null && implant != null) {
        plantas
            .getImplantacaoX(implant)
            .then((plantas) => {
                res.jsonp(plantas);
            })
            .catch((erro) => {
                res.render("error", {
                    error: erro,
                    message: "Erro na obtenção dos registos com implantação",
                });
            });
    } else {
        plantas
            .list()
            .then((plantas) => {
                res.jsonp(plantas);
            })
            .catch((erro) => {
                res.render("error", {
                    error: erro,
                    message: "Erro na obtenção da lista de plantas",
                });
            });
    }
});

//GET /plantas/freguesias: devolve a lista de freguesias ordenada alfabeticamente e semrepetições;
router.get("/plantas/freguesias", function (req, res) {
    plantas
        .freguesias()
        .then((lista) => {
            res.jsonp(lista);
        })
        .catch((erro) => {
            res.render("error", {
                error: erro,
                message: "Erro na obtenção da lista das freguesias",
            });
        });
});

//GET /plantas/especies: devolve a lista das espécies vegetais ordenada alfabeticamente e semrepetições;
router.get("/plantas/especies", function (req, res) {
    plantas
        .especies()
        .then((lista) => {
            res.jsonp(lista);
        })
        .catch((erro) => {
            res.render("error", {
                error: erro,
                message: "Erro na obtenção da lista das espécies vegetais",
            });
        });
});

//POST /plantas: acrescenta um registo novo à BD;
router.post("/plantas", (req, res) => {
    plantas
        .addPlanta(req.body)
        .then((dados) => res.status(201).json(dados))
        .catch((erro) => res.status(603).json({ erro: erro }));
});

//DELETE /plantas/:id: elimina da BD o registo com o identificador id.
router.delete("/plantas/:id", (req, res) => {
    plantas
        .deletePlanta(req.params.id)
        .then((dados) => res.json(dados))
        .catch((erro) => res.status(605).json({ erro: erro }));
});

//GET /plantas/:id: devolve o registo com identificador id;
router.get("/plantas/:id", function (req, res) {
    plantas
        .getLista(req.params.id)
        .then((plantas) => {
            res.jsonp(plantas);
        })
        .catch((erro) => {
            res.render("error", {
                error: erro,
                message: "Erro na obtenção do registo da planta",
            });
        });
});

module.exports = router;
