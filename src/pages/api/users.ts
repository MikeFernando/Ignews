export default (request, response) => {
   const users = [
      { id: 1, name: 'Mike' },
      { id: 2, name: 'Renê' },
      { id: 3, name: 'Sueli' }
   ]

   return response.json(users)
}
