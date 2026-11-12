function inventory_index(req, res) {
  res.render("index");
}

function inventory_perk_a_colas(req, res) {
  res.render("perk-a-colas");
}

function inventory_gobblegums(req, res) {
  res.render("gobblegums");
}

function inventory_all(req, res) {
  res.render("all");
}

function inventory_details(req, res) {}

function inventory_new_perk(req, res) {}
function inventory_new_gum(req, res) {
  res.render("new-gum");
}

function inventory_new_post(req, res) {}

module.exports = {
  inventory_index,
  inventory_perk_a_colas,
  inventory_gobblegums,
  inventory_all,
  inventory_details,
  inventory_new_perk,
  inventory_new_gum,
  inventory_new_post,
};
