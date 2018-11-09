export const exampleTypes = {
  EXAMPLE: 'EXAMPLE'
}

export const useExample = () => {
  return {
    type: exampleTypes.EXAMPLE,
    payload: {
      clicks: 1
    }
  }
}