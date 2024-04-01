const init = (router, config, resources) => {
  const { db } = resources;
  router.delete("/delete-wine-list/:userId/:itemId", async (req, res) => {
    if(!req.params) {
      req.status(400).json({message: "no userId in url"})
    }
    if(!req.body) {
      req.status(400).json({message: "no body passed"})
    }
    try {
      /**
       * find in wine lists by user id
       * find wine list item by id
       * update wine list item
       */
      await db.WineLists.updateOne({
        userId: req.params.userId
      },
      {
        $pull: {
          "wineList": {
            id: req.params.itemId
          }
        }
      });
      res.status(200).json(req.body)
    } catch(error) {
      res.status(500).json({message: error.toString()})
    }
  });
};

module.exports = { init };