const API_URL = process.env.API_URL;

export async function getDataList(search) {
  const url = `${API_URL}/sites/MLA/search?q=${search}`
  const res = await fetch(url)
  
  if (!res.ok)
    throw new Error('Failed to fetch data')
  
  const { results } = await res.json();
  
  return results;
}

export async function getDataById(id) {
  const url = `${API_URL}/items/${id}`
  const res = await fetch(url)
  
  if (!res.ok)
    throw new Error('Failed to fetch data')
  
  return res.json()
}