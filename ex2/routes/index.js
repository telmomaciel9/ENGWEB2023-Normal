var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/", function (req, res) {
    var data = new Date().toISOString().substring(0, 19);
    axios
        .get("http://localhost:15030/plantas")
        .then((response) => {
            res.render("index", { lists: response.data, d: data });
        })
        .catch((err) => {
            res.render("error", { error: err });
        });
});

router.get("/especies/:id", function (req, res) {
    var data = new Date().toISOString().substring(0, 19);
    axios
        .get("http://localhost:15030/plantas?especie=" + req.params.id)
        .then((response) => {
            res.render("paginaEspecie", {
                lista: response.data,
                d: data,
            });
        })
        .catch((err) => {
            res.render("error", { error: err });
        });
});

router.get("/:id", function (req, res) {
    var data = new Date().toISOString().substring(0, 19);
    axios
        .get("http://localhost:15030/plantas/" + req.params.id)
        .then((response) => {
            res.render("paginaPlanta", { planta: response.data, d: data });
        })
        .catch((err) => {
            res.render("error", { error: err });
        });
});

module.exports = router;
