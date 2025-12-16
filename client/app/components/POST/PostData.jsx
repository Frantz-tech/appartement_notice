export async function postData(
  url = '',
  data = {},
  successMessage = 'Envoie réussie'
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await response.json()
  console.log('Réponse status :', response.status)

  if (!response.ok) {
    alert(json.errors ? json.errors[0] : json.message || 'Erreur inconnue')
    throw new Error(json.error || `Erreur serveur : ${response.status}`)
  }
  alert(successMessage)
  console.log('Réponse JSON', json)
  return json
}
