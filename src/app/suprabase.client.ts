import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "your credentials"
const supabasepassword='your credential'

export const supabase=createClient(supabaseUrl, supabasepassword)

