"use client"

import { useEffect } from "react"
import { usePostHog } from "posthog-js/react"
import { usePathname, useSearchParams } from "next/navigation"

export default function PostHogPageViewComponent() {
    const pathname = usePathname()  
    const searchParams = useSearchParams()
    const posthog = usePostHog()
    
    useEffect(() => {
        //Track page view
        if (pathname && posthog) {
            let url = window.origin + pathname
            if (searchParams.toString()) {
                url = url + `?${searchParams.toString()}`
            }
            posthog.capture("$pageview", {
                $current_url: url,
            })
        }
    }, [pathname, searchParams, posthog])
    
    return null
}