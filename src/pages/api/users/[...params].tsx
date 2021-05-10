import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
   console.log(request.query)

   const users = [
      { id: 1, name: 'Mike' },
      { id: 2, name: 'Renê' },
      { id: 3, name: 'Sueli' }
   ]

   return response.json(users)
}
