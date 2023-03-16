const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});

const ensureLoggedIn = require("./../middlewares/ensure_logged_in");

const db = require("./../db");
router.use(ensureLoggedIn);

router.get("/travel/new", (req, res) => {
  res.render("new_travel");
});


router.get("/travel", (req, res) => {
    const sql = "SELECT * FROM travel;";
  
    db.query(sql, (err, dbRes) => {
      const travel = dbRes.rows;
      const user_id = req.session.user_id;
      res.render("explore-experience", { travel, user_id });
    });
  });

router.post("/travel", ensureLoggedIn, (req, res) => {
  // prepare the SQL we're sending to the database
  const sql = `
      INSERT INTO travel (title, image_url, location, description, user_id) 
      VALUES ($1, $2, $3, $4, $5);
    `;

  db.query(
    sql,
    [req.body.title, req.body.image_url, req.body.location, req.body.description, req.session.user_id],
    (err, dbRes) => {
      res.redirect("travel");
    }
  );
});


router.get("/travel/:id/edit", ensureLoggedIn, (req, res) => {
  const sql = `select * from travel where id = $1;`;
  console.log(sql);

  db.query(sql, [req.params.id], (err, dbRes) => {
    if (err) {
      console.log(err);
    } else {
      const travel = dbRes.rows[0];
      res.render("edit_travel", { travel });
    }
  });
});

router.put("/travel/:id", (req, res) => {
  const sql = `UPDATE travel SET title = $1, image_url = $2, location = $3, description = $4 WHERE id = $5;`;

  db.query(
    sql,
    [
      req.body.title,
      req.body.image_url,
      req.body.location,
      req.body.description,
      req.params.id,
    ],
    (err, dbRes) => {
      // res.redirect(`/travel/${req.params.id}`)
      res.redirect("/travel");
    }
  );
});

router.delete("/travel/:id", (req, res) => {
  const sql = `DELETE FROM travel WHERE id = $1;`;

  db.query(sql, [req.params.id], (err, dbRes) => {
    res.redirect("/travel");
  });
});

// router.get("/login", (req, res) => {
//   res.render("login");
// });

// router.get("/signup", (req, res) => {
//   res.render("signup");
// });

module.exports = router;
