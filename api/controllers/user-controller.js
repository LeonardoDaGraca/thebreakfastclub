/**
* Pedro Gutierrez Rincon
* 01/29/2023
* the controllers for CRUD opperations are defined here.
* Called by router.
**/

/*const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API is working.'
  });
}*/

async function getTest(req, res)
{
  let payload = {
    success: true,
    message: 'API is working (test)'
  };
  return res.status(200).json(payload);
}

module.exports = {
  getTest
};
