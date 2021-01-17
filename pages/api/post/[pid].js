export default function handler(req, res) {
  const {
    query: { pid },
  } = req

  const test = "adfdas"

  res.end(`Post: ${pid}`)
}
