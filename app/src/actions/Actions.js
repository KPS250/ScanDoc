import { ActionTypes } from "./ActionTypes"

export const increase = (payload) => ({ type: ActionTypes.increase, payload:payload })
export const decrease = (payload) => ({ type: ActionTypes.decrease, payload:payload })

export const toggleInternet = (payload) => ({ type: ActionTypes.toggleInternet, payload:payload })
export const toggleApiError = (payload) => ({ type: ActionTypes.toggleApiError, payload:payload })
export const toggleLoading = (payload) => ({ type: ActionTypes.toggleLoading, payload:payload })

export const pages = (payload) => ({ type: ActionTypes.pages, payload:payload })


