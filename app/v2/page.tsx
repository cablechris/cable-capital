import { redirect } from 'next/navigation'

// Keep links to the previous homepage working at the canonical root URL.
export default function V2Home() {
  redirect('/')
}
