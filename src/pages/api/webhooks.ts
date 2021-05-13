import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Evento recebido')

  res.status(200)
  res.json({ ok: true })
}
