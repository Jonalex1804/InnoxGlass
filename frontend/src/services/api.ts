import axios from "axios"

const API_BASE_URL = "http://localhost:3001"

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export interface QuoteData {
  nombre: string
  apellido: string
  email: string
  telefono: string
  servicio: string
  mensaje?: string
}

export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  data?: T
}

export const createQuote = async (quoteData: QuoteData): Promise<ApiResponse> => {
  try {
    const response = await api.post("/quotes", quoteData)
    return response.data
  } catch (error) {
    console.error("Error creating quote:", error)
    throw error
  }
}

export const getServices = async (): Promise<ApiResponse> => {
  try {
    const response = await api.get("/services")
    return response.data
  } catch (error) {
    console.error("Error fetching services:", error)
    throw error
  }
}

export const getQuotes = async (): Promise<ApiResponse> => {
  try {
    const response = await api.get("/quotes")
    return response.data
  } catch (error) {
    console.error("Error fetching quotes:", error)
    throw error
  }
}

export default api
