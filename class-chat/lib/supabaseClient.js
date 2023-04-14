import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://ofouyycoclzmipiqgfpv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mb3V5eWNvY2x6bWlwaXFnZnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0OTEwOTEsImV4cCI6MTk5NzA2NzA5MX0.garhuw4-PXeuNv13kzdiB5olKJ1K76wTXE8jBMIcf-w')