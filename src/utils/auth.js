class Auth {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _parseResponse(res) {
    try {
      if (res.ok) {
        console.log(res)
        return res.json();
      }
    } catch (e) {
      return `Ошибка: ${e.status}`;
    }
  }

  signup({email, password}) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({email, password})
    }).then(this._parseResponse)
  }

  signin({email, password}) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({email, password})
    }).then(this._parseResponse)

  }

}


const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

export default auth
