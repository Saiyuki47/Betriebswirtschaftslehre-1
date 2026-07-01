import type { Thema } from '../../types'
import { kapitel as k1 } from './kapitel-1'
import { kapitel as k2 } from './kapitel-2'
import { kapitel as k3 } from './kapitel-3'
import { kapitel as k4 } from './kapitel-4'
import { kapitel as k5 } from './kapitel-5'

// Alle Referenz-Themen in Kapitel-Reihenfolge. Pro Kapitel eine Datei.
export const themen: Thema[] = [k1, k2, k3, k4, k5]
