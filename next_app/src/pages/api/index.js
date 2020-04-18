export default async (req, res) => { 
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        msg: "Welcome to getJSON.io"
    }))
}
  