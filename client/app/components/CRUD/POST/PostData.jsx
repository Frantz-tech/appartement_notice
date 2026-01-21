export async function postData(
  url = '',
  formData,
  successMessage = 'Envoi réussi',
  extraHeaders = {}
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      ...extraHeaders // ⚠️ Ne PAS mettre Content-Type
    },
    body: formData
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
