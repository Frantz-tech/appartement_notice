export async function postData(
  url = '',
  data = {},
  successMessage = 'Envoie réussie',
  extraHeaders = {}
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders
    },
    body: JSON.stringify(data)
  })
  const json = await response.json()
  console.log('Réponse status :', response.status)

  if (!response.ok) {
    const errorMessage = json.errors
      ? json.errors[0]
      : json.message ||
        JSON.stringify(json) ||
        `Erreur serveur : ${response.status}`
    alert(errorMessage)
    return
  }
  alert(successMessage)
  console.log('Réponse JSON', json)
  return json
}
