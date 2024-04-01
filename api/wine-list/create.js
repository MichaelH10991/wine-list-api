const init = (router, config, resources) => {
  const { db } = resources;
  router.post("/create-wine-list/:userId", async (req, res) => {
    if(!req.params) {
      req.status(400).json({message: "no userId in url"})
    }
    if(!req.body) {
      req.status(400).json({message: "no body passed"})
    }
    try {
      await db.WineLists.updateOne({
        userId: req.params.userId,
      },
      {
        "$push": {
          "wineList": req.body
        }
      }, 
      {
        new: true
      });
      res.status(200).json(req.body)
    } catch(error) {
      res.status(500).json({message: error.toString()})
    }
  });
};

module.exports = { init };