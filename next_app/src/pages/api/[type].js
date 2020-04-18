import { getStaticJSON } from '../../JSON/index'

export default async (req, res) => { 
    const returnData = getStaticJSON(req.query.type);
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(returnData))
}
  