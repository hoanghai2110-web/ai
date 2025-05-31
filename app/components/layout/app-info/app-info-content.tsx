import { APP_DESCRIPTION } from "@/lib/config"
import React from "react"

export function AppInfoContent() {
  return (
    <div className="space-y-4">
      <p className="text-foreground leading-relaxed">
        {APP_DESCRIPTION}
      </p>
    </div>
  )
}
