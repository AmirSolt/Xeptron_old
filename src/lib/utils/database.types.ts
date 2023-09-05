export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Personality: {
        Row: {
          created_at: string
          id: string
          sampleText: string | null
          use_case: string | null
        }
        Insert: {
          created_at?: string
          id: string
          sampleText?: string | null
          use_case?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          sampleText?: string | null
          use_case?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Personality_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Wallet: {
        Row: {
          created_at: string
          credits: number | null
          id: string
        }
        Insert: {
          created_at?: string
          credits?: number | null
          id: string
        }
        Update: {
          created_at?: string
          credits?: number | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Wallet_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
