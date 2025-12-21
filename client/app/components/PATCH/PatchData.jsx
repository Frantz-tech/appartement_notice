export async function patchData(
  url = '',
  data = {},
  successMessage = 'Modification réussie'
) {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  let json = null
  try {
    json = await response.json()
  } catch (e) {
    json = null
  }
  console.log('Réponse status :', response.status)

  if (!response.ok) {
    alert(json.errors ? json.errors[0] : json.message || 'Erreur inconnue')
    throw new Error(json.error || `Erreur serveur : ${response.status}`)
  }
  alert(successMessage)
  console.log('Réponse JSON', json)
  return json
}
