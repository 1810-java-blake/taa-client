export const schinookTypes = {
  SCHINOOK: 'SCHINOOK'
}

export const useSchinook = (pTaaList) => {
  return {
    type: schinookTypes.SCHINOOK,
    payload: {
      taaList: pTaaList
    }
  }
}