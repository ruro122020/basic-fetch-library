const retrieve = async (url) => {
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

const send = async (url, body) => {
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
const alter = async (url, body) => {
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
const remove = async (url) => {
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
