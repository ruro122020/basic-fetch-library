export const retrieve = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      throw new Error(data.error)
    }

  } catch (err) {
    console.log(err)
  }
}

export const send = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      throw new Error(data.error)
    }
  } catch (err) {
    console.log(err)
  }
}
export const alter = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      throw new Error(data.error)
    }
  } catch (error) {
    console.log(error)
  }
}
export const remove = async (url) => {
  try {
    const res = await fetch(url, { method: 'DELETE' })
    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      throw new Error(data.error)
    }

  } catch (err) {
    console.log(err)
  }
}


