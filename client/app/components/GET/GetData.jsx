export async function getData(url = '', id) {
  const fullUrl = id ? `${url}/${id}` : url

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const json = await response.json()
  console.log('Réponse status :', response.status)

  if (!response.ok) {
    alert(json.errors ? json.errors[0] : json.message || 'Erreur inconnue')
    throw new Error(json.error || `Erreur serveur : ${response.status}`)
  }
  console.log('Données récupérées avec succès :', json)
  return json
}
