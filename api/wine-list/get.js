const data = {
  "userId": 123,
  "wine-list": [
    {
      "id": 1,
      "name": "Château Beauséjour-Duffau-Lagarrosse",
      "sub": "The best one that they did",
      "rating": 5,
      "country": "France",
      "grape": "Siraz",
      "type": "Red",
      "region": "Somewhere in France",
      "description": "Some wine, it was fine, I guess."
    },
    {
      "id": 2,
      "name": "Yellow Tail",
      "sub": "Chardonnay",
      "type": "White",
      "rating": 5,
      "country": "Australia",
      "notes": "This was a good one, dry, tangly in my mouth. yum!",
      "description": "Shadoobee doo"
    },
    {
      "id": 3,
      "name": "Decántalo",
      "rating": 5,
      "country": "South Africa",
      "description": "Lorem"
    },
    {
      "id": 4,
      "name": "Cairenne",
      "rating": 5,
      "country": "Germany",
      "type": "Red",
      "grape": "Malbec",
      "description": "Lorem ipsum d"
    },
    {
      "id": 5,
      "name": "Something",
      "rating": 5,
      "country": "France",
      "description": "Lorem ipsum dolor si"
    }
  ]
}

const init = (router, config, resources) => {
  const { db } = resources;
  router.get("/get-wine-list", async (req, res) => {
    // await db.WineLists.create(data)
    const wineList = await db.WineLists.find({userId: req.query.userId}).exec()
    console.log(wineList)
    console.log(`getting wine list for user ${req.query.userId}`)
    res.status(200).json(wineList[0])
  });
};

module.exports = { init };