export const baseState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isFinished: false,
    errorMessage: null,
}

export const baseMutations = {
    loading(state) {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    },
    success(state) {
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
    },
    finish(state) {
        state.isFinished = true
    },
    error(state, errorMessage) {
      state.errorMessage = errorMessage
      state.isError = true
      state.isSuccess = false
      state.isLoading = false
    }
}