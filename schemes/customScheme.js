import { LocalScheme } from '~auth/runtime'

export default class CustomScheme extends LocalScheme {
  // Override `fetchUser` method of `local` scheme
  
  async fetchUser (endpoint) {
    if (!this.check().valid) {
      return Promise.resolve()
    }

    // User endpoint is disabled
    if (!this.options.endpoints.user) {
      this.$auth.setUser({})
      return Promise.resolve()
    }


    // Try to fetch user and then set
    return this.$auth
      .requestWith(this.name, endpoint, this.options.endpoints.user)
      .then((response) => {
        const userData = response.data.user

        if (!userData) {
          const error = new Error(
            `User Data response does not contain field ${this.options.user.property}`
          )
          return Promise.reject(error)
        }

        this.$auth.setUser(userData)
        return response
      })
      .catch((error) => {
        this.$auth.callOnError(error, { method: 'fetchUser' })
        return Promise.reject(error)
      })
  }
}