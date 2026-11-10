const express = require("express");
const inventoryController = require("../controllers/inventoryController.js");

const router = express.Router();

router.get("/", inventoryController.inventory_index);

router.get("/perk-a-colas", inventoryController.inventory_perk_a_colas);
router.get("/perk-a-colas/:id", inventoryController.inventory_details);

router.get("/gobblegums", inventoryController.inventory_gobblegums);
router.get("/gobblegums/:id", inventoryController.inventory_details);

router.get("/all", inventoryController.inventory_all);

router.get("/new-product", inventoryController.inventory_new);
router.post("/new-product", inventoryController.inventory_new_post);

module.exports = router;
