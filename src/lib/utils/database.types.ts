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
      personalities: {
        Row: {
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          use_case: string | null
          writing_style: string | null
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          id: string
          last_name?: string | null
          use_case?: string | null
          writing_style?: string | null
        }
        Update: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          use_case?: string | null
          writing_style?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "personalities_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          personality: string
          wallet: string
        }
        Insert: {
          created_at?: string
          id: string
          personality: string
          wallet: string
        }
        Update: {
          created_at?: string
          id?: string
          personality?: string
          wallet?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_personality_fkey"
            columns: ["personality"]
            referencedRelation: "personalities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_wallet_fkey"
            columns: ["wallet"]
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          }
        ]
      }
      wallets: {
        Row: {
          created_at: string
          customer_id: string | null
          id: string
          neg_credit: number
          pos_credit: number
          usage_counter: number
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          id: string
          neg_credit?: number
          pos_credit?: number
          usage_counter?: number
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          id?: string
          neg_credit?: number
          pos_credit?: number
          usage_counter?: number
        }
        Relationships: [
          {
            foreignKeyName: "wallets_id_fkey"
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
      decrement_credit: {
        Args: {
          amount: number
          row_id: string
        }
        Returns: undefined
      }
      increment_credit: {
        Args: {
          amount: number
          row_id: string
        }
        Returns: undefined
      }
      increment_usage_counter: {
        Args: {
          row_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
