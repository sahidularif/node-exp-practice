const adminRouter = express.Router();
const handler = {}
handler.handleReqRes = (req, res)=>{
    console.log(req.get('content-type'));
    res.end('Hellow world')
}
module.exports = handler;