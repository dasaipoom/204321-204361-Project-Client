import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      currentUser: null,
      message: ''
    }
  }

  onChange = e => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    //const { id, password } = this.state
    // TODO: implement signInWithEmailAndPassword()
  }

  render() {
    return (
      <section className="section container">
        <div className="columns is-centered">
          <div className="column is-half">
            <form onSubmit={this.onSubmit}>
              <div className="field">
                <label className="label">ID</label>
                <div className="control">
                  <input
                    className="input"
                    type="id"
                    name="id"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}


export default LoginForm