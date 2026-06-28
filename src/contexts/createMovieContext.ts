import { createContext } from 'react'
import type { MovieContextType } from '../types/MovieContextType.ts'

export const MovieContext = createContext<MovieContextType | null>(null)
