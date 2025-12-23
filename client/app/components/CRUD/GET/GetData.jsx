export async function getData(url = '', id, type = 'guest') {
  const fullUrl = id ? `${url}/${id}` : url

  // Récupère le token selon le type
  let token
  if (type === 'guest') {
    token = JSON.parse(localStorage.getItem('guestToken'))?.token
  } else if (type === 'admin') {
    token = JSON.parse(localStorage.getItem('adminToken'))?.token
  }

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
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
