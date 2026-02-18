import {createClient, CreateClient} from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseURL=process.env.SUPABASE_PROJECT_UR
const supabaseSecret=process.env.SUPABASE_PK

const supabase = createClient(supabaseURL,supabaseSecret)

export default supabase